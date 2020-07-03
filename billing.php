<?php
/**
 * @author Walter Omedo - Nezasoft Limited
 * @copyright 2017
 *Core Billing Module Script 
 * This is the core module for generating invoices based on the clients status, order details and billing schedule
 23 Feb 2017
 */

  //Check if its an ajax request being made
  if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
  //Make a connection
  include("../connection/connect.php");
  //Before we do anything lets check the token to make sure the request came from a user and not a robot
  $token = $_POST['token'];

  if($token ==''){
   die("<div class='alert alert-danger'>Invalid token used to generate billing. Please refresh page to continue....</div>");
  }

  $db_name=$db_prefix.'billingdb_rel';//Billing Database
  $current_date = date('Y-m-d');//Today's Date
  //Generate  sequential numbers
	function generate_numbers($start, $count, $digits) {//Lets create a new reference number
	$result = array();
	for ($n = $start; $n < $start + $count; $n++) {				 
	$result[] = str_pad($n, $digits, "0", STR_PAD_LEFT);				 
	}
	return $result;
	}

    //Get Company Details
    $company = $conn->prepare("SELECT id AS company_id FROM company WHERE id='".$_SESSION['FON_COMPANY']."' ORDER BY id ASC");
  	$company->execute();
  	$company_rows = $company->fetchAll(PDO::FETCH_ASSOC);
	$info ="<font color='green'><i class='glyph-icon  icon-check-circle' ></i></font> Billing initiated at <code>".date('Y-m-d h:i:s A')."</code>...........<br/>";
	$bill_count =0;//Now of accounts to be processed, initialize to zero(0)
	foreach($company_rows as $company_row){
	$company_id = $company_row['company_id'];   
	//Get the GLs
	//Sales GL
	$sales_gl = $conn->prepare("SELECT id AS gl_id FROM ".$db_prefix."billingdb_rel.glmaster WHERE cntrl_type='S' AND company_id='".$company_id."' LIMIT 1");
	$sales_gl->execute();
	$debtors_gl = $conn->prepare("SELECT id AS gl_id FROM ".$db_prefix."billingdb_rel.glmaster WHERE cntrl_type='D' AND company_id='".$company_id."' LIMIT 1");
	$debtors_gl->execute();
	$creditors_gl = $conn->prepare("SELECT id AS gl_id FROM ".$db_prefix."billingdb_rel.glmaster WHERE cntrl_type='C' AND company_id='".$company_id."' LIMIT 1 ");
	$creditors_gl->execute();
	$vat_gl = $conn->prepare("SELECT id AS gl_id FROM ".$db_prefix."billingdb_rel.glmaster WHERE cntrl_type='T' AND company_id='".$company_id."' LIMIT 1 ");
	$vat_gl->execute();
	$excise_gl = $conn->prepare("SELECT id AS gl_id FROM ".$db_prefix."billingdb_rel.glmaster WHERE cntrl_type='X' AND company_id='".$company_id."' LIMIT 1 ");
	$excise_gl->execute();
	
	$sales_gl_row = $sales_gl->fetch(PDO::FETCH_ASSOC);
	$debtors_gl_row = $debtors_gl->fetch(PDO::FETCH_ASSOC);
	$creditors_gl_row = $creditors_gl->fetch(PDO::FETCH_ASSOC);
	$vat_gl_row = $vat_gl->fetch(PDO::FETCH_ASSOC);
	$excise_gl_row = $excise_gl->fetch(PDO::FETCH_ASSOC);

	$payment_mode=2;//Journal
	$trans_type =1;//Journal
	$payment_type= 1;//Invoice
	$department = 6;//Sales & Marketting department
	$tax_credit_ledger = $vat_gl_row['gl_id'];//Sales VAT credit Account
	$tax_debit_ledger = $debtors_gl_row['gl_id'];//Sales VAT Debit Account
	$sales_credit_ledger = $sales_gl_row['gl_id'];//Sales Revenue Account
	$sales_debit_ledger = $debtors_gl_row['gl_id'];//Debtors Account
	$excise_credit_ledger = $excise_gl_row['gl_id'];//Excise Account
	$excise_debit_ledger = $debtors_gl_row['gl_id'];//Debtors Account

	//Lets decide on which quarter, semester or trimester this is
	$month_period=date('m');//Current month in numerical format (eg 01,02,05 etc)
	$get_quarter_map = $conn->prepare("SELECT * FROM quarter_map WHERE mnth='".$month_period."' LIMIT 1");
	$get_quarter_map->execute();
	$quarter_map_row =$get_quarter_map->fetch(PDO::FETCH_ASSOC);
	$semester = $quarter_map_row['semister'];
	$trimester = $quarter_map_row['trimester'];
	$quarter= $quarter_map_row['quarter'];

	try{
	//Lets start will all active accounts
	$active_clients = $conn->prepare("SELECT id,client_name,order_id,cat_id,account_no,commence_date FROM client WHERE acc_active='Yes' AND company_id='".$company_id."' ORDER BY client_name ASC");
	$active_clients->execute();
	$active_clients_rows=$active_clients->fetchAll(PDO::FETCH_ASSOC);
	$client_count=$active_clients->rowCount();
	if($client_count==0){
	    die("<div class='alert alert-danger'>Sorry, you are not allowed to initiate billing. You dont have any clients yet or all your clients have been deactivated from billing.</div>");
	}

	//COUNT INVOICES
	$invoice_count=0;
	$invoice_success=0;
	//Loop through all the clients
	foreach($active_clients_rows as $active_clients_row){
        $bill_count++;
		$client_id = $active_clients_row['id'];
		$order_id=$active_clients_row['order_id'];
		$cat_id = $active_clients_row['cat_id'];
		$client_name = $active_clients_row['client_name'];
		$client_account = $active_clients_row['account_no'];
		$commence_date = $active_clients_row['commence_date'];
        $info .= "<font color='green'><i class='glyph-icon  icon-check-circle' ></i></font> Starting billing for <code>".$client_name."</code> for account no <code>".$client_account."</code> @".date('h:i:s A')."<br/>";
		//Lets get this client's years count billing schedule
		$years_schedule = $conn->prepare("SELECT year FROM acc_schedule_years WHERE client_id='".$client_id."' ");
		$years_schedule->execute();
		$years_schedule_rows=$years_schedule->fetchAll(PDO::FETCH_ASSOC);

		//Fetch all the years
		foreach($years_schedule_rows as $years_schedule_row){
			   $year = $years_schedule_row['year'];
				//Now that we have all the years that this client has been scheduled lets
				//Lets get their billing schedules from the specific acc_schedule tables they have been
				//Scheduled in as opposed to searching the entire database
				//Client's billing scheduled table
				$scheduled_table= $conn->prepare("SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA='".$db_prefix."maindb_rel' AND TABLE_NAME LIKE '%".$year."%'");
				$scheduled_table->execute();
				$scheduled_table_row = $scheduled_table->fetch(PDO::FETCH_ASSOC);
				$table_name = $scheduled_table_row['TABLE_NAME'];
				
				//Lets see if this client has a schedule
				$client_schedule = $conn->prepare("SELECT due_date,invoice_date FROM ".$table_name." WHERE due_date <= '".$current_date."' AND client_id='".$client_id."' AND status='P'");
				$client_schedule->execute();
				$client_schedule_rows = $client_schedule->fetchAll(PDO::FETCH_ASSOC);
				
				//Fetch clients' schedule date
				foreach($client_schedule_rows as $client_schedule_row){				
				 $due_date = $client_schedule_row['due_date'];
				 $invoice_date = $client_schedule_row['invoice_date'];				 		
				 //Only generate invoice of date if greater than or same sa commence date
				if($invoice_date>=$commence_date){
				 //Now that we have the billing schedule details
				 //Lets get billing details from the service order

				 $order = $conn->prepare("SELECT o.id AS order_id, tax.id AS tax_id, o.product_id,o.rate,o.currency_id,oc.units,oc.actual_units,prod.excise_duty,
				                        tax.tax_value,pf.month_count,o.branch_id,prod.prod_name,tax.tax_desc,cl.apply_tax,cl.branch_id,cl.account_no,cl.client_name
            										FROM orders AS o
            										LEFT JOIN order_creteria AS oc ON oc.order_id= o.id
            										LEFT JOIN prod_service AS prod ON prod.id = o.product_id
            										LEFT JOIN tax_prodserv AS txp ON txp.product_id = o.product_id
            										LEFT JOIN taxes AS tax ON tax.id = txp.tax_id
            										LEFT JOIN payment_freq AS pf ON pf.id = prod.pay_freq_id
            										LEFT JOIN client AS cl ON cl.order_id = o.id
            										WHERE  o.id='".$order_id."' AND o.company_id='".$company_id."'");
				$order->execute();
				$order_row = $order->fetch(PDO::FETCH_ASSOC);
				$product_id = $order_row['product_id'];//Product
				$excise_apply = $order_row['excise_duty'];//Excise Duty
				$tax_id = $order_row['tax_id'];//Tax Type
				$tax_name = $order_row['tax_desc'];//Tax Name
				$rate = $order_row['rate'];
				$qty = $order_row['units'];
				$freq = $order_row['month_count'];//Frequency ie Monthly, Quarterly or Annually
				$tax_rate = $order_row['tax_value']/100;// Tax amount as % Rate
				$currency = $order_row['currency_id'];//Currency  ie Dollar or KES
				$product = $order_row['product_id'];//Product the client subscribed to
				$product_name = $order_row['prod_name'];//Actual name of the product
				$sales_tax_credit_ledger=$vat_gl_row['gl_id'];//Creditors
				$sales_tax_debit_ledger=$vat_gl_row['gl_id'];//Debtors
				$sales_revenue_credit=$sales_gl_row['gl_id'];//Sales Revenue Credit Account
				$sales_revenue_debit = $debtors_gl_row['gl_id'];//Sales Revenue Debit Account	
                //$user_id = 17;//User Id of the server
                $user_id = $_SESSION['FON_USER_ID'];//User who initiated billing	
				$branch_id = $order_row['branch_id'];//Branch of this client
				
				
				//Before we start saving the records lets start by getting the invoice reference no
				$get_ref = $conn->prepare("SELECT document_value FROM business_docs WHERE doc_code='IR' AND company_id='".$company_id."' ORDER BY id DESC LIMIT 1");
				$get_ref->execute();
				$row = $get_ref->fetch(PDO::FETCH_ASSOC);
				$start_ref = $row['document_value'];	
				$numbers = generate_numbers($start_ref, 1, 11);
				//print_r(array_values($numbers));
				$init = 1;
				foreach($numbers as $num){
				$ref_no = $init. $num;
				$_SESSION['FON_GEN_REF_NO']='RF-'.$ref_no;
				}
				
				//Lets generate invoice no
				$generate_invoice = $conn->prepare("SELECT document_value FROM business_docs WHERE doc_code='IN' AND company_id='".$company_id."' ORDER BY id DESC LIMIT 1");
				$generate_invoice->execute();
				$invoice_row = $generate_invoice->fetch(PDO::FETCH_ASSOC);
				$start_invoice = $invoice_row['document_value'];//Last invoice no
	
				$numbers2 = generate_numbers($start_invoice, 1, 11);
				//print_r(array_values($numbers));
				$init2 = 1;
				foreach($numbers2 as $num2){
				$invoice_no = $init2.$num2;
				$_SESSION['FON_GEN_INVOICE_NO']=$invoice_no;
				}
					//Now that we have everything is in place lets start billing clients
					//Start a Transaction
					try{
					  $conn->beginTransaction();
					//Save invoice
					 $save_invoice = $conn->prepare("INSERT INTO ".$db_name.".bill_invoice(invoice_no,ref_no,chq_no,val_date,due_date,sys_date,client_id,branch_id,product_id,cat_id,user_id,company_id)
					 VALUES('".$_SESSION['FON_GEN_INVOICE_NO']."','".$_SESSION['FON_GEN_REF_NO']."','".$_SESSION['FON_GEN_REF_NO']."','".$invoice_date."','".$due_date."',curdate(),'".$client_id."' ,'".$branch_id."','".$product_id."','".$cat_id."','".$user_id."','".$company_id."')");
					 $save_invoice->execute();
					 $num_rows = $save_invoice->rowCount();
					 //Save statment					 
					 if($num_rows>=1){
					 //Lets update the document counter
					 $update_invoice_counter = $conn->prepare("UPDATE business_docs SET document_value = document_value + 1 WHERE doc_code='IN' AND company_id='".$company_id."'");
					 $update_invoice_counter->execute();
					 $update_ref_counter = $conn->prepare("UPDATE business_docs SET document_value = document_value + 1 WHERE doc_code='IR' AND company_id='".$company_id."' ");
					 $update_ref_counter->execute();
					 //Get Invoice ID
					 $get_invoice = $conn->prepare("SELECT id FROM ".$db_name.".bill_invoice WHERE invoice_no='".$_SESSION['FON_GEN_INVOICE_NO']."' AND company_id='".$company_id."'");
					 $get_invoice->execute();
					 $get_invoice_row = $get_invoice->fetch(PDO::FETCH_ASSOC);
					 $invoice_id = $get_invoice_row['id'];
			           
			           if($excise_apply=='No'){
			               
			               //Perform calculations
            				$amount = $freq * $rate * $qty ;//Before VAT
            				$total_amount_vat = $amount * ($tax_rate + 1);
            				$tax = $total_amount_vat - $amount;
	
					 //Post in statement table
					 //Credit Sales 
					 $save_stat_credit = $conn->prepare("INSERT INTO ".$db_name.".statment(account_type,gl_id,invoice_id,user_id,tax_id,pay_type_id,pay_mode_id,trans_type_id,amount,
					 acc_no,txn_date,val_date,sys_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,dept_id,cr_dr,item_desc,currency_id,pay_type,branch_id,company_id)
					 VALUES('C','".$sales_credit_ledger."','".$invoice_id."','".$user_id."','".$tax_id."','".$payment_type."','".$payment_mode."','".$trans_type."',
					 '".$amount."','".$client_account."','".$invoice_date."','".$due_date."',curdate(),'".$_SESSION['FON_GEN_REF_NO']."',
					 '".$_SESSION['FON_GEN_REF_NO']."','".$client_name."','".$quarter."','".$trimester."','".$semester."','".$client_id."',
					'".$department."','C','".$product_name."','".$currency."','INVOICE','".$branch_id."','".$company_id."')");//Credit this transaction
					 //Debit Sales
					 $save_stat_debit = $conn->prepare("INSERT INTO ".$db_name.".statment(account_type,gl_id,invoice_id,user_id,tax_id,pay_type_id,pay_mode_id,trans_type_id,amount,acc_no,txn_date,val_date,sys_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,dept_id,cr_dr,item_desc,currency_id,pay_type,branch_id,company_id)
					 VALUES('C','".$sales_debit_ledger ."','".$invoice_id."','".$user_id."','".$tax_id."','".$payment_type."','".$payment_mode."','".$trans_type."',
					 '".$amount."','".$client_account."','".$invoice_date."','".$due_date."',curdate(),'".$_SESSION['FON_GEN_REF_NO']."',
					 '".$_SESSION['FON_GEN_REF_NO']."','".$client_name."','".$quarter."','".$trimester."','".$semester."','".$client_id."',
					 '".$department."','D','".$product_name."','".$currency."','INVOICE','".$branch_id."','".$company_id."')");//Debit this transaction					 
					 //Save the tax element
					 //Credit Sales VAT
					 $save_tax_credit = $conn->prepare("INSERT INTO ".$db_name.".statment(account_type,gl_id,invoice_id,user_id,tax_id,pay_type_id,pay_mode_id,trans_type_id,amount, acc_no,txn_date,val_date,sys_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,dept_id,cr_dr,item_desc,currency_id,pay_type,branch_id,company_id)
					 VALUES('C','".$tax_credit_ledger."','".$invoice_id."','".$user_id."','".$tax_id."','".$payment_type."','".$payment_mode."','".$trans_type."',
					 '".$tax."','".$client_account."','".$invoice_date."','".$due_date."',curdate(),'".$_SESSION['FON_GEN_REF_NO']."',
					 '".$_SESSION['FON_GEN_REF_NO']."','".$client_name."','".$quarter."','".$trimester."','".$semester."','".$client_id."',
					'".$department."','C','".$tax_name."','".$currency."','INVOICE','".$branch_id."','".$company_id."')");
					//Debit Sales VAT
					$save_tax_debit = $conn->prepare("INSERT INTO ".$db_name.".statment(account_type,gl_id,invoice_id,user_id,tax_id,pay_type_id,pay_mode_id,trans_type_id,amount, acc_no,txn_date,val_date,sys_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,dept_id,cr_dr,item_desc,currency_id,pay_type,branch_id,company_id)
					 VALUES('C','".$tax_debit_ledger."','".$invoice_id."','".$user_id."','".$tax_id."','".$payment_type."','".$payment_mode."','".$trans_type."',
					 '".$tax."','".$client_account."','".$invoice_date."','".$due_date."',curdate(),'".$_SESSION['FON_GEN_REF_NO']."',
					 '".$_SESSION['FON_GEN_REF_NO']."','".$client_name."','".$quarter."','".$trimester."','".$semester."','".$client_id."',
					'".$department."','D','".$tax_name."','".$currency."','INVOICE','".$branch_id."','".$company_id."')");
					 //Execute the queries
					 $save_stat_credit->execute();
					 $save_stat_debit->execute();
					 $save_tax_credit->execute();
					 $save_tax_debit->execute();
					//Update billing schedule status to posted
					$update_schedule=$conn->prepare("UPDATE ".$table_name." SET status='D' WHERE (due_date = '".$due_date."'  AND invoice_date='".$invoice_date."') AND client_id ='".$client_id."' ");
					$update_schedule->execute();
					 //Commit changes
					 $conn->commit();
					 $invoice_success++;
					 
			           }elseif($excise_apply=='Yes'){
			               //Perform calculations
            				$amount = $freq * $rate * $qty ;//Before VAT
            				$excise_amount = ($amount * 0.15);
            				$tax = ($amount + $excise_amount) * $tax_rate;
            		
			               
			          //Post in statement table
					 //Credit Sales 
					 $save_stat_credit = $conn->prepare("INSERT INTO ".$db_name.".statment(account_type,gl_id,invoice_id,user_id,tax_id,pay_type_id,pay_mode_id,trans_type_id,amount,
					 acc_no,txn_date,val_date,sys_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,dept_id,cr_dr,item_desc,currency_id,pay_type,branch_id,company_id)
					 VALUES('C','".$sales_credit_ledger."','".$invoice_id."','".$user_id."','".$tax_id."','".$payment_type."','".$payment_mode."','".$trans_type."',
					 '".$amount."','".$client_account."','".$invoice_date."','".$due_date."',curdate(),'".$_SESSION['FON_GEN_REF_NO']."',
					 '".$_SESSION['FON_GEN_REF_NO']."','".$client_name."','".$quarter."','".$trimester."','".$semester."','".$client_id."',
					'".$department."','C','".$product_name."','".$currency."','INVOICE','".$branch_id."','".$company_id."')");//Credit this transaction
					 //Debit Sales
					 $save_stat_debit = $conn->prepare("INSERT INTO ".$db_name.".statment(account_type,gl_id,invoice_id,user_id,tax_id,pay_type_id,pay_mode_id,trans_type_id,amount,acc_no,txn_date,val_date,sys_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,dept_id,cr_dr,item_desc,currency_id,pay_type,branch_id,company_id)
					 VALUES('C','".$sales_debit_ledger ."','".$invoice_id."','".$user_id."','".$tax_id."','".$payment_type."','".$payment_mode."','".$trans_type."',
					 '".$amount."','".$client_account."','".$invoice_date."','".$due_date."',curdate(),'".$_SESSION['FON_GEN_REF_NO']."',
					 '".$_SESSION['FON_GEN_REF_NO']."','".$client_name."','".$quarter."','".$trimester."','".$semester."','".$client_id."',
					 '".$department."','D','".$product_name."','".$currency."','INVOICE','".$branch_id."','".$company_id."')");//Debit this transaction					 
					 //Save the tax element
					 //Credit Sales VAT
					 $save_tax_credit = $conn->prepare("INSERT INTO ".$db_name.".statment(account_type,gl_id,invoice_id,user_id,tax_id,pay_type_id,pay_mode_id,trans_type_id,amount, acc_no,txn_date,val_date,sys_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,dept_id,cr_dr,item_desc,currency_id,pay_type,branch_id,company_id)
					 VALUES('C','".$tax_credit_ledger."','".$invoice_id."','".$user_id."','".$tax_id."','".$payment_type."','".$payment_mode."','".$trans_type."',
					 '".$tax."','".$client_account."','".$invoice_date."','".$due_date."',curdate(),'".$_SESSION['FON_GEN_REF_NO']."',
					 '".$_SESSION['FON_GEN_REF_NO']."','".$client_name."','".$quarter."','".$trimester."','".$semester."','".$client_id."',
					'".$department."','C','".$tax_name."','".$currency."','INVOICE','".$branch_id."','".$company_id."')");
					//Debit Sales VAT
					$save_tax_debit = $conn->prepare("INSERT INTO ".$db_name.".statment(account_type,gl_id,invoice_id,user_id,tax_id,pay_type_id,pay_mode_id,trans_type_id,amount, acc_no,txn_date,val_date,sys_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,dept_id,cr_dr,item_desc,currency_id,pay_type,branch_id,company_id)
					 VALUES('C','".$tax_debit_ledger."','".$invoice_id."','".$user_id."','".$tax_id."','".$payment_type."','".$payment_mode."','".$trans_type."',
					 '".$tax."','".$client_account."','".$invoice_date."','".$due_date."',curdate(),'".$_SESSION['FON_GEN_REF_NO']."',
					 '".$_SESSION['FON_GEN_REF_NO']."','".$client_name."','".$quarter."','".$trimester."','".$semester."','".$client_id."',
					'".$department."','D','".$tax_name."','".$currency."','INVOICE','".$branch_id."','".$company_id."')");
					
					
					//Save the excise element
					 //Credit Sales VAT
					 $save_excise_credit = $conn->prepare("INSERT INTO ".$db_name.".statment(account_type,gl_id,invoice_id,user_id,tax_id,pay_type_id,pay_mode_id,trans_type_id,amount, acc_no,txn_date,val_date,sys_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,dept_id,cr_dr,item_desc,currency_id,pay_type,branch_id,company_id)
					 VALUES('C','".$excise_credit_ledger."','".$invoice_id."','".$user_id."','4','".$payment_type."','".$payment_mode."','".$trans_type."',
					 '".$excise_amount."','".$client_account."','".$invoice_date."','".$due_date."',curdate(),'".$_SESSION['FON_GEN_REF_NO']."',
					 '".$_SESSION['FON_GEN_REF_NO']."','".$client_name."','".$quarter."','".$trimester."','".$semester."','".$client_id."',
					'".$department."','C','Excise Duty','".$currency."','INVOICE','".$branch_id."','".$company_id."')");
					//Debit Sales VAT
					$save_excise_debit = $conn->prepare("INSERT INTO ".$db_name.".statment(account_type,gl_id,invoice_id,user_id,tax_id,pay_type_id,pay_mode_id,trans_type_id,amount, acc_no,txn_date,val_date,sys_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,dept_id,cr_dr,item_desc,currency_id,pay_type,branch_id,company_id)
					 VALUES('C','".$excise_debit_ledger."','".$invoice_id."','".$user_id."','4','".$payment_type."','".$payment_mode."','".$trans_type."',
					 '".$excise_amount."','".$client_account."','".$invoice_date."','".$due_date."',curdate(),'".$_SESSION['FON_GEN_REF_NO']."',
					 '".$_SESSION['FON_GEN_REF_NO']."','".$client_name."','".$quarter."','".$trimester."','".$semester."','".$client_id."',
					'".$department."','D','Excise Duty','".$currency."','INVOICE','".$branch_id."','".$company_id."')");
					 //Execute the queries
					 $save_stat_credit->execute();
					 $save_stat_debit->execute();
					 $save_tax_credit->execute();
					 $save_tax_debit->execute();
					 $save_excise_credit->execute();
					 $save_excise_debit->execute();
					//Update billing schedule status to posted
					$update_schedule=$conn->prepare("UPDATE ".$table_name." SET status='D' WHERE (due_date = '".$due_date."'  AND invoice_date='".$invoice_date."') AND client_id ='".$client_id."' ");
					$update_schedule->execute();
					 //Commit changes
					 $conn->commit();
					 $invoice_success++;
			               
			               
			           }
		
					 }
					 //Save in statment					
					}catch(PDOException $e){
					 //if an error occurs roll back the transaction
					$conn->rollBack();	
					
					die("Database Error:".$e->getMessage());								
					}
				 }	
					$invoice_count++;
			}
		
		}
		
		
	}
    $info .= "<font color='green'><i class='glyph-icon  icon-check-circle' ></i></font> Ended billing for <code>".$client_name."</code> for account no <code>".$client_account."</code> @".date('h:i:s A')."..........<br/>";
	  $log_desc =" Monthly billing done!!! <strong>".$invoice_count." invoices generated for ".$bill_count." clients accounts</strong>";
	  //Log Activity
	  $log = $conn->prepare("INSERT INTO system_logs(system_date,time_stamp,user_id,log_desc,doc_type,doc_no,company_id)VALUES(curdate(),curtime(),'".$_SESSION['FON_USER_ID']."','".          $log_desc."','OTHER','','".$company_id."')");
	  $log->execute();	
	
}catch(PDOException $e){
die("Database Error:".$e->getMessage());
}	
    
}
$info .="<font color='green'><i class='glyph-icon  icon-check-circle' ></i></font> Billing ended at <code>".date('Y-m-d h:i:s A')."</code>...........<br/>
Invoices generated:- <code>".$invoice_count."</code>";
    
    echo "<div class='alert alert-success'>".$info." </div>";
}else{
	die("<font color='red'>You are not authorized to access this content.</font>");
}


?>