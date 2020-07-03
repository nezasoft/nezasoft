<?php

/**
 * @author Walter Omedo - Frontier Optical Networks Limited -- End Year Procedure module
 * This script will be run at the end of the year to bring forward all the balances and create a statment table for current transactions
 * @copyright 2019
 * 30th Dec 2019
 */
//Make a connection
include("../connection/connect.php");
//Set Time Zone
date_default_timezone_set("Africa/Nairobi");
$current_date = date('Y-m-d');//Today's Date
$year = date('Y');//current year
//$year = 2019;
//$year--;
$prev_year=$year-1;
$val_date = $year.'-01-01';

$user_id =17;
//Generate  sequential numbers
function generate_numbers($start, $count, $digits){//Lets create a new reference number
$result = array();
for ($n = $start; $n < $start + $count; $n++) {				 
 $result[] = str_pad($n, $digits, "0", STR_PAD_LEFT);				 
}
return $result;
}

//Save Log
file_put_contents('log.txt',"/******************************************************************************/",FILE_APPEND | LOCK_EX); 
file_put_contents('log.txt', "\n", FILE_APPEND);
file_put_contents('log.txt',"Started closing accounts---------".date('Y-m-d h:i:sa'),FILE_APPEND | LOCK_EX);
file_put_contents('log.txt', "\n", FILE_APPEND);
try{
 $conn->beginTransaction(); 
 //Check if table exists
/*$check_table = $conn->prepare("SELECT * FROM information_schema.tables WHERE table_schema = '".$db_prefix."billingdb_rel' AND table_name = 'stat".$year."' LIMIT 1");
 $check_table->execute();
 $check_table_count = $check_table->rowCount();
 if($check_table_count==0){
    //Lets create a new table to save all our transactions
     $create_table =$conn->prepare("CREATE TABLE ".$db_prefix."billingdb_rel.stat".$year." LIKE ".$db_prefix."billingdb_rel.statment");
     $create_table->execute();
     
     file_put_contents('log.txt',"Creating tables...".date('Y-m-d h:i:sa'),FILE_APPEND | LOCK_EX);
     file_put_contents('log.txt', "\n", FILE_APPEND);
 }
*/
 //Lets confirm if temp table exists
 $check_table_temp = $conn->prepare("SELECT * FROM information_schema.tables WHERE table_schema = '".$db_prefix."billingdb_rel' AND table_name = 'stat_temp' LIMIT 1");
 $check_table_temp->execute();
 $check_table_count_temp = $check_table_temp->rowCount();
 if($check_table_count_temp==0){
      //Lets create another temporary table
     $create_table_temp =$conn->prepare("CREATE TABLE ".$db_prefix."billingdb_rel.stat_temp LIKE ".$db_prefix."billingdb_rel.statment");
     $create_table_temp->execute();
 }else{
     //Remove data from table
     $empty_temp = $conn->prepare("TRUNCATE TABLE ".$db_prefix."billingdb_rel.stat_temp");
     $empty_temp->execute();
     
 }
 
 file_put_contents('log.txt',"Finished creating tables. Data backup starting...".date('Y-m-d h:i:sa'),FILE_APPEND | LOCK_EX);
 file_put_contents('log.txt', "\n", FILE_APPEND);
 

//Lets select data from the main statment table and paste into our newly created temporary table
$insert_data = $conn->prepare("INSERT INTO ".$db_prefix."billingdb_rel.stat_temp SELECT * FROM ".$db_prefix."billingdb_rel.statment WHERE EXTRACT(YEAR FROM val_date)='".$prev_year."' ORDER BY id ASC");
$insert_data->execute();

//Empty statment table
$empty_statment = $conn->prepare("TRUNCATE TABLE ".$db_prefix."billingdb_rel.statment");
$empty_statment->execute();

//Disable foreign key checks for now
$set_fk = $conn->prepare("SET foreign_key_checks=0");
$set_fk->execute();


 //Lets get all the companies and perform end year year procedure for each company one by one
 $companies = $conn->prepare("SELECT id AS company_id,comp_name,client_no FROM company ORDER BY id DESC");
 $companies->execute();
 $company_rows = $companies->fetchAll(PDO::FETCH_ASSOC);
 


 foreach($company_rows as $company_row){
     $company_id = $company_row['company_id'];
     $company_name=$company_row['comp_name'];
     $company_no=$company_row['client_no'];
     
     file_put_contents('log.txt',"/******************************************************************************/",FILE_APPEND | LOCK_EX); 
     file_put_contents('log.txt', "\n", FILE_APPEND);
     file_put_contents('log.txt',"Begin closing accounts for ".$company_name."...".date('Y-m-d h:i:sa'),FILE_APPEND | LOCK_EX);
     file_put_contents('log.txt', "\n", FILE_APPEND);
     //Lets get the debtors GL
     $debtors_gl = $conn->prepare("SELECT id AS debtors_id FROM ".$db_prefix."billingdb_rel.glmaster WHERE company_id='".$company_id."' AND cntrl_type='D'  LIMIT 1");
     $debtors_gl->execute();
     $debtors_gl_row = $debtors_gl->fetch(PDO::FETCH_ASSOC);
     $debtor_gl_id = $debtors_gl_row['debtors_id'];
     
     //Lets get the creditors GL
     $creditors_gl = $conn->prepare("SELECT id AS creditors_id FROM ".$db_prefix."billingdb_rel.glmaster WHERE company_id='".$company_id."' AND cntrl_type='C'  LIMIT 1");
     $creditors_gl->execute();
     $creditors_gl_row = $creditors_gl->fetch(PDO::FETCH_ASSOC);
     $creditor_gl_id = $creditors_gl_row['creditors_id'];
     
     //Lets start by closing debtor's accounts
     file_put_contents('log.txt',"Closing DEBTORS for ".$company_name."...".date('Y-m-d h:i:sa'),FILE_APPEND | LOCK_EX);
     file_put_contents('log.txt', "\n", FILE_APPEND);
    
     //lets get all client accounts
    $clients = $conn->prepare("SELECT id AS client_id,client_name FROM client WHERE company_id='".$company_id."' ORDER BY client_name ASC");
     $clients->execute();
     $client_rows_count=$clients->rowCount();
     if($client_rows_count>=1){
         $client_rows = $clients->fetchAll(PDO::FETCH_ASSOC);
         
         foreach($client_rows as $client_row){
                $client_id = $client_row['client_id'];
                $client_name = $client_row['client_name'];
                
               //Calculate the clients balances brought forward
                $client_bal = $conn->prepare("SELECT stat.currency_id,cl.account_no,SUM(IF(stat.cr_dr='C',stat.amount,0)) AS creditBal,
                SUM(IF(stat.cr_dr='D',stat.amount,0)) AS debitBal
                FROM ".$db_prefix."billingdb_rel.stat_temp AS stat
                LEFT JOIN client AS cl ON cl.id = stat.client_id
                LEFT JOIN ".$db_prefix."billingdb_rel.glmaster AS gl ON gl.id = stat.gl_id
                WHERE cl.id='".$client_id."' AND gl.cntrl_type !='N' AND  (gl.cntrl_type='D' OR gl.cntrl_type='N' OR stat.gl_id IN (SELECT gl_id FROM charges )) AND EXTRACT(YEAR FROM stat.val_date) ='".$prev_year."' 
                GROUP BY cl.id ASC");
            
                $client_bal->execute();
                $bal_row = $client_bal->fetch(PDO::FETCH_ASSOC);
                $credit_bal = $bal_row['creditBal'];
                $debit_bal = $bal_row['debitBal'];
                $currency_id = $bal_row['currency_id'];
                
         
                  //Lets use the company id to get the opening balance reference from business for this company
                 $docs = $conn->prepare("SELECT id AS doc_id,document_no,document_value,doc_code FROM business_docs WHERE company_id='".$company_id."' AND doc_code='OB' LIMIT 1");
                 $docs->execute();
                 $doc_row = $docs->fetch(PDO::FETCH_ASSOC);
                 $start_ref = $doc_row['document_value'];
                 $doc_code = $doc_row['doc_code'];	
            	 $numbers = generate_numbers($start_ref, 1, 11);
            	 $init = 1;
            	 foreach($numbers as $num){
            	 $ref_no = $init.$num;
            	 $_SESSION['FON_OB_REF_NO']=$doc_code.$ref_no;
            
            	 }
            	 $ref_no=$_SESSION['FON_OB_REF_NO'];
             
                    if($credit_bal!=0){
                    //Credit the entry
                    $save_ob_credit = $conn->prepare("INSERT INTO  ".$db_prefix."billingdb_rel.statment(acc_no,account_type,amount,gl_id,cr_dr,sys_date,txn_date,val_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,user_id,item_desc,pay_type,company_id,currency_id)
                    VALUES('".$bal_row ['account_no']."','C','".$credit_bal."','".$debtor_gl_id."','C',curdate(),curdate(),'".$val_date."','".$ref_no."','".$ref_no."','".$client_name."','1','1','1','".$client_id."','".$user_id."','OPEN BALANCE B/F','OPEN BALANCE','".$company_id."','".$currency_id."')");
                    $save_ob_credit->execute();
                    }
                    if($debit_bal!=0){
                    //Debit Entry
                    $save_ob_debit = $conn->prepare("INSERT INTO  ".$db_prefix."billingdb_rel.statment(acc_no,account_type,amount,gl_id,cr_dr,sys_date,txn_date,val_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,user_id,item_desc,pay_type,company_id,currency_id)
                    VALUES('".$bal_row ['account_no']."','C','".$debit_bal."','".$debtor_gl_id."','D',curdate(),curdate(),'".$val_date."','".$ref_no."','".$ref_no."','".$client_name."','1','1','1','".$client_id."','".$user_id."','OPEN BALANCE B/F','OPEN BALANCE','".$company_id."','".$currency_id."')");
                    $save_ob_debit->execute();   
                    }
                
                
                
                //Update Business docs
                $update_docs = $conn->prepare("UPDATE business_docs SET document_value=document_value+1 WHERE company_id='".$company_id."' AND doc_code='OB' LIMIT 1");
                $update_docs->execute(); 
            
                   
         }
       
     file_put_contents('log.txt',"Finished closing DEBTORS for ".$company_name."...".date('Y-m-d h:i:sa'),FILE_APPEND | LOCK_EX);
     file_put_contents('log.txt', "\n", FILE_APPEND);
     

     file_put_contents('log.txt',"Closing VENDORS for ".$company_name."...".date('Y-m-d h:i:sa'),FILE_APPEND | LOCK_EX);
     file_put_contents('log.txt', "\n", FILE_APPEND);
    
 
     }

     //Lets start closing vendor accounts
     //Get all vendors
    $vendors = $conn->prepare("SELECT v.id AS vendor_id, v.vendor_no, v.vendor_name FROM ".$db_prefix."inventory_rel.vendor AS v WHERE v.company_id='".$company_id."' ORDER BY v.vendor_name ASC");
     $vendors->execute();
     $vendor_count = $vendors->rowCount();
     if($vendor_count>=1){
         //Get all vendors
         $vendor_rows = $vendors->fetchAll(PDO::FETCH_ASSOC);
          foreach($vendor_rows as $vendor_row){
              $vendor_id = $vendor_row['vendor_id'];
              $vendor_name = $vendor_row['vendor_name'];
              $vendor_no= $vendor_row['vendor_no'];
              
              //Lets get the creditor balances
             $vendor_bal = $conn->prepare("SELECT v.id AS vendor_id, v.vendor_no,stat.currency_id, SUM(IF(stat.cr_dr='C',amount,0)) AS creditBal, SUM(IF(stat.cr_dr='D',amount,0)) AS debitBal  FROM ".$db_prefix."inventory_rel.vendor AS v
											LEFT JOIN ".$db_prefix."billingdb_rel.stat_temp AS stat ON stat.client_id = v.id LEFT JOIN ".$db_prefix."billingdb_rel.glmaster  AS gl ON stat.gl_id = gl.id 
											LEFT JOIN ".$db_prefix."maindb_rel.logical_table3 AS curr ON curr.id = stat.currency_id WHERE stat.company_id='".$company_id."' 
											AND  stat.account_type='V' AND stat.client_id='".$vendor_id."' AND EXTRACT(YEAR FROM stat.val_date) ='".$prev_year."'
											GROUP BY v.id ORDER BY v.vendor_name ASC LIMIT 1");
			  $vendor_bal->execute();
			  $vendor_bal_row = $vendor_bal->fetch(PDO::FETCH_ASSOC);
			  $credit_bal = $vendor_bal_row['creditBal'];
			  $debit_bal = $vendor_bal_row['debitBal'];
              $currency_id = $vendor_bal_row['currency_id'];
			 
			  //Lets use the company id to get the opening balance reference from business for this company
                $docs = $conn->prepare("SELECT id AS doc_id,document_no,document_value,doc_code FROM business_docs WHERE company_id='".$company_id."' AND doc_code='OB' LIMIT 1");
                 $docs->execute();
                 $doc_row = $docs->fetch(PDO::FETCH_ASSOC);
                 $start_ref = $doc_row['document_value'];
                 $doc_code = $doc_row['doc_code'];	
            	 $numbers = generate_numbers($start_ref, 1, 11);
            	 $init = 1;
            	 foreach($numbers as $num){
            	 $ref_no = $init.$num;
            	 $_SESSION['FON_OB_REF_NO']=$doc_code.$ref_no;
            
            	 }
            	 
            	     $ref_no=$_SESSION['FON_OB_REF_NO'];

			        //Insert the new vendor balances.
			        if($debit_bal!=0){
                    //debit the entry
                    $save_ob_debit = $conn->prepare("INSERT INTO  ".$db_prefix."billingdb_rel.statment(acc_no,account_type,amount,gl_id,cr_dr,sys_date,txn_date,val_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,user_id,item_desc,pay_type,company_id,currency_id)
                    VALUES('".$vendor_no."','V','".$debit_bal."','".$creditor_gl_id."','D',curdate(),curdate(),'".$val_date."','".$ref_no."','".$ref_no."','".$vendor_name."','1','1','1','".$vendor_id."','".$user_id."','OPEN BALANCE B/F','OPEN BALANCE','".$company_id."','".$currency_id."')");
                    $save_ob_debit->execute();
			        }
			        
			        if($credit_bal!=0){
                    //credit the entry
                    $save_ob_credit = $conn->prepare("INSERT INTO  ".$db_prefix."billingdb_rel.statment(acc_no,account_type,amount,gl_id,cr_dr,sys_date,txn_date,val_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,user_id,item_desc,pay_type,company_id,currency_id)
                    VALUES('".$vendor_no."','V','".$credit_bal."','".$creditor_gl_id."','C',curdate(),curdate(),'".$val_date."','".$ref_no."','".$ref_no."','".$vendor_name."','1','1','1','".$vendor_id."','".$user_id."','OPEN BALANCE B/F','OPEN BALANCE','".$company_id."','".$currency_id."')");
			        $save_ob_credit->execute();
			            
			        }
              
              
              //Update Business docs
              $update_docs = $conn->prepare("UPDATE business_docs SET document_value=document_value+1 WHERE company_id='".$company_id."' AND doc_code='OB' LIMIT 1");
              $update_docs->execute(); 
              
          }
         
         
     }
     
     file_put_contents('log.txt',"Finished closing VENDORS for ".$company_name."...".date('Y-m-d h:i:sa'),FILE_APPEND | LOCK_EX);
     file_put_contents('log.txt', "\n", FILE_APPEND); 	
      
     file_put_contents('log.txt',"Closing LEDGERS for ".$company_name."...".date('Y-m-d h:i:sa'),FILE_APPEND | LOCK_EX);
     file_put_contents('log.txt', "\n", FILE_APPEND);
     
     
        
      //This final stage involves bringing forward the ledger balances except debtor and creditor Gls
      $gl_bal = $conn->prepare("SELECT gl.cntrl_name,gl.id AS gl_id, curr.id AS currency_id, SUM(IF(stat.cr_dr='C',amount,0)) AS creditBal, SUM(IF(stat.cr_dr='D',amount,0)) AS debitBal 
        FROM ".$db_prefix."billingdb_rel.stat_temp AS stat 
        LEFT JOIN logical_table3 AS curr ON curr.id = stat.currency_id
        LEFT JOIN ".$db_prefix."billingdb_rel.glmaster AS gl ON gl.id = stat.gl_id
        WHERE stat.company_id='".$company_id."'  AND  EXTRACT(YEAR FROM stat.val_date)='".$prev_year."' AND gl.cntrl_type!='D' && gl.cntrl_type!='C'  GROUP BY stat.gl_id, stat.currency_id ORDER BY stat.gl_id ASC");
     $gl_bal->execute();
     $gl_bal_count = $gl_bal->rowCount();
     
     if($gl_bal_count>=1){
          $gl_bal_rows = $gl_bal->fetchAll(PDO::FETCH_ASSOC);
          foreach($gl_bal_rows as $gl_bal_row){
             $credit_bal = $gl_bal_row['creditBal'];
             $debit_bal = $gl_bal_row['debitBal'];
             $gl_id = $gl_bal_row['gl_id'];
             $gl_name = $gl_bal_row['cntrl_name'];
             $currency_id = $gl_bal_row['currency_id'];
            
         
         if($debit_bal!=0){
          //debit the entry
          $save_ob_debit = $conn->prepare("INSERT INTO  ".$db_prefix."billingdb_rel.statment(acc_no,account_type,amount,gl_id,cr_dr,sys_date,txn_date,val_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,user_id,item_desc,pay_type,company_id,currency_id)
            VALUES('".$company_no."','O','".$debit_bal."','".$gl_id."','D',curdate(),curdate(),'".$val_date."','".$ref_no."','".$ref_no."','".$company_name."','1','1','1','".$company_id."','".$user_id."','OPEN BALANCE B/F','OPEN BALANCE','".$company_id."','".$currency_id."')");
          $save_ob_debit->execute();
             
         } 
         if($credit_bal!=0){
        //credit the entry
          $save_ob_credit = $conn->prepare("INSERT INTO  ".$db_prefix."billingdb_rel.statment(acc_no,account_type,amount,gl_id,cr_dr,sys_date,txn_date,val_date,chq_no,ref_no,payee_name,quarter,trimester,semister,client_id,user_id,item_desc,pay_type,company_id,currency_id)
          VALUES('".$company_no."','O','".$credit_bal."','".$gl_id."','C',curdate(),curdate(),'".$val_date."','".$ref_no."','".$ref_no."','".$company_name."','1','1','1','".$company_id."','".$user_id."','OPEN BALANCE B/F','OPEN BALANCE','".$company_id."','".$currency_id."')");
          $save_ob_credit->execute();
             
         }
         
         
         //Update Business docs
         $update_docs = $conn->prepare("UPDATE business_docs SET document_value=document_value+1 WHERE company_id='".$company_id."' AND doc_code='OB' LIMIT 1");
         $update_docs->execute();
        } 
         
     }
     
     file_put_contents('log.txt',"Finished closing accounts for ".$company_name."...".date('Y-m-d h:i:sa'),FILE_APPEND | LOCK_EX);
     file_put_contents('log.txt', "\n", FILE_APPEND);
     file_put_contents('log.txt',"/******************************************************************************/",FILE_APPEND | LOCK_EX);
     file_put_contents('log.txt', "\n", FILE_APPEND);
     file_put_contents('log.txt', "\n", FILE_APPEND);
     file_put_contents('log.txt', "\n", FILE_APPEND);
 }

//Enable foreign key checks for now
$set_fk = $conn->prepare("SET foreign_key_checks=1");
$set_fk->execute();

$conn->commit();	     
     
    
}catch(PDOException $e){
    $conn->rollBack();
    
    //Save in log file the error
    //Save Log
    file_put_contents('log.txt',"Database Error:-".$e->getMessage().date('Y-m-d h:i:sa'),FILE_APPEND | LOCK_EX);
    file_put_contents('log.txt', "\n", FILE_APPEND);
    
    
}




?>