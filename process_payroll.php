<?php
/**
 * @author Walter Omedo - Frontier Optical Networks Limited -- Process Payroll
 * @copyright 2017
 * 13th Dec 2017
 */
 //Lets set the default time zone
 date_default_timezone_set('Africa/Nairobi');
//Make a connection
include("../connection/connect.php");

try{
$conn->beginTransaction();
//Get records of all active employees
$employees = $conn->prepare("SELECT id AS employee_id, bsalary, mname, fname, surname FROM ".$db_prefix."epayrolldata_rel.employee WHERE active='Y' ORDER BY fname ASC");
$employees->execute();
$employees_rows = $employees->fetchAll();

foreach($employees_rows as $employee_row){
$employee_name = $employee_row['fname'].' '.$employee_row['mname'].' '.$employee_row['surname'];
$bsalary = $employee_row['bsalary'];//Basic Salary
$employee_id = $employee_row['employee_id']; // Employee ID

//Employees Payroll Items
$employee_items = $conn->prepare("SELECT ei.employee_id, ei.id AS employee_item_id, ei.amount, it.item_name, ei.item_id FROM ".$db_prefix."epayrolldata_rel.employee_items AS ei 
								  LEFT JOIN ".$db_prefix."epayrolldata_rel.items AS it ON it.id = ei.item_id WHERE ei.employee_id='".$employee_id."'");
$employee_items->execute();
$item_rows = $employee_items->fetchAll(PDO::FETCH_ASSOC);	
$total_deductions = 0.00;
$paye = 0.00;
$provident = 0.00;
$nssf = 0.00;
$bonus = 0.00;
$overtime = 0.00;
foreach($item_rows as $item_row){
	if($item_row['item_id']==57){// if NHIF
	//Lets get all the NHIF Rates
	 $nhif_rates = $conn->prepare("SELECT rate, minimum, maximum  FROM ".$db_prefix."epayrolldata_rel.nhif_chart WHERE (minimum <= '".$bsalary."' ) ORDER BY maximum DESC LIMIT 1");
	 $nhif_rates->execute();
	 $nhif_row = $nhif_rates->fetch(PDO::FETCH_ASSOC);
	 $nhif  = $nhif_row['rate'];
	 $total_deductions += $nhif;
	 //Update Items
	$query="UPDATE  ".$db_prefix."epayrolldata_rel.employee_items SET amount='".$nhif."' WHERE employee_id='".$employee_id."' AND  item_id='".$item_row['item_id']."' LIMIT 1 ";
	$update = $conn->prepare($query);
    $update->execute();
	}
	if($item_row['item_id']==58){//Monthly Relief
	$monthly_relief = $item_row['amount'];	
	}
	
	if($item_row['item_id']==61){//NSSF Individual
	 $nssf_individual = $item_row['amount'];
	 $nssf = $nssf_individual;
	 $total_deductions += $nssf_individual;
	 //Update Items
	$query="UPDATE  ".$db_prefix."epayrolldata_rel.employee_items SET amount='".$nssf."'  WHERE employee_id='".$employee_id."'  AND  item_id='".$item_row['item_id']."' LIMIT 1";
	$update = $conn->prepare($query);
    $update->execute();
	}
	if($item_row['item_id']==64){//NITA
	 $nita = $item_row['amount'];	
	}
	if($item_row['item_id']==63){//NSSF Company
	 $nssf_company = $item_row['amount'];	
	}
	if($item_row['item_id']==67){//Provident Company calculated as 6% of the Basic Salary
	 $provident_company = 0.06 * $bsalary;
     //Update Items
	$query="UPDATE  ".$db_prefix."epayrolldata_rel.employee_items SET amount='".$provident_company."' WHERE employee_id='".$employee_id."'  AND  item_id='".$item_row['item_id']."' LIMIT 1";	
    $update = $conn->prepare($query);
    $update->execute();	
	}
	
	if($item_row['item_id']==68){//Provident Individual calculated as 6% of the Basic Salary
	 $provident_individual = 0.06 * $bsalary;	
	 $provident = $provident_individual;
	 $total_deductions += $provident_individual;
	  //Update Items
	$query="UPDATE  ".$db_prefix."epayrolldata_rel.employee_items SET amount='".$provident_individual."' WHERE employee_id='".$employee_id."' AND  item_id='".$item_row['item_id']."'  LIMIT 1 ";
	$update = $conn->prepare($query);
    $update->execute();
	}
	
	//Bonus
	if($item_row['item_id']==66){//Bonus
    $bonus = $item_row['amount'];	
	}
	//Overtime
	if($item_row['item_id']==16){//Overtime
    $overtime = $item_row['amount'];	
	}
	
}  
   $gross_income = ($bsalary + $bonus + $overtime);//Gross Income
   $taxable_income  =  $gross_income-($provident + $nssf);	//Taxable Income				  
   //Lets get the PAYE Tax Chart
	$paye_chart = $conn->prepare("SELECT rate,lower_limit,upper_limit,band FROM ".$db_prefix."epayrolldata_rel.tax_chart ORDER BY upper_limit ASC");
	$paye_chart->execute();
	$paye_rows = $paye_chart->fetchAll();
	$count = 0;
	$uppera=0;$upperb=0;$upperc=0;$upperd=0;$uppere=0;
	$ratea=0;$rateb=0;$ratec=0;$rated=0;$ratee=0;
    //echo  'Employee Name: '.$employee_name.' Basic: '. $bsalary;
	  foreach($paye_rows as $paye_row){
	  $band = $paye_row['band'];
	  if($band =='A'){
	  $uppera = $paye_row['upper_limit'];
	  $ratea = $paye_row['rate']/100;
	  }elseif($band=='B'){
	  $upperb = $paye_row['upper_limit'];
	  $rateb = $paye_row['rate']/100;
	  }elseif($band=='C'){
	  $upperc = $paye_row['upper_limit'];
	  $ratec = $paye_row['rate']/100;
	  }elseif($band=='D'){
	  $upperd = $paye_row['upper_limit'];
	  $rated = $paye_row['rate']/100;
	  }elseif($band=='E'){
	  $uppere = $paye_row['upper_limit'];
	  $ratee = $paye_row['rate']/100;	
	  }	   
	   $upper = $paye_row['upper_limit'];	   
	   //Let Calculate PAYE
	   if($taxable_income<$uppera){//First Cluster
		 $gross_paye = $uppera * $ratea;
	     $net_paye = $gross_paye - $monthly_relief;
	   }elseif($taxable_income>=$uppera && $taxable_income <= $upperb){//Second Cluster
	      $first_cluster = $uppera * $ratea;
		  $second_cluster = ($taxable_income - $uppera) * $rateb;
		  $gross_paye = $first_cluster + $second_cluster;
		  $net_paye = $gross_paye - $monthly_relief;
	   }elseif($taxable_income>=$upperb && $taxable_income <=  $upperc){//Third Cluster
			$first_cluster = $uppera * $ratea;
			$second_cluster = ($upperb - $uppera) * $rateb;
			$third_cluster = ($taxable_income  - ($uppera +  ($upperb - $uppera)) ) * $ratec;			
			$gross_paye = $first_cluster + $second_cluster + $third_cluster;
			$net_paye = $gross_paye - $monthly_relief;
	    }elseif($taxable_income>=$upperc && $taxable_income <=$upperd){//Fourth Cluster
		    $first_cluster = $uppera * $ratea;
			$second_cluster = ($upperb - $uppera) * $rateb;
			$third_cluster = ($taxable_income  - ($uppera +  ($upperb - $uppera)) ) * $ratec;	
			$fourth_cluster = ($taxable_income - ($uppera + ($uppera + ($upperb - $uppera) + ($upperc-$upperb))) )* $rated;
			$gross_paye = $first_cluster + $second_cluster + $third_cluster;
			$net_paye = $gross_paye - $monthly_relief;	
         }elseif($gross_income>$upperd){
			$first_cluster = $uppera * $ratea;
			$second_cluster = ($upperb - $uppera) * $rateb;
			$third_cluster = ($taxable_income  - ($uppera +  ($upperb - $uppera)) ) * $ratec;	
			$fourth_cluster = ($taxable_income - ($uppera + ($uppera + ($upperb - $uppera) + ($upperc - $upperb) + ($upperd - $upperc))) )* $ratee;			
			$gross_paye = $first_cluster + $second_cluster + $third_cluster + $fourth_cluster;
			$net_paye = $gross_paye - $monthly_relief;	
		}
	 
	   }
	     echo  'Employee Name: '.$employee_name.' Basic:'.$bsalary.' PAYE: '.$net_paye.' NSSF: '.$nssf.' NHIF: '.$nhif.' PROVIDENT FUND: '.$provident.' <br/>';	
		 
		 //Lets Save this user's PAYE
		 $update = $conn->prepare("UPDATE  ".$db_prefix."epayrolldata_rel.employee_items SET amount='".$net_paye."' WHERE employee_id='".$employee_id."' AND item_id='62' LIMIT 1 ");
		 $update->execute();
		//Lets Save this user's BASIC
		 $update2 = $conn->prepare("UPDATE  ".$db_prefix."epayrolldata_rel.employee_items SET amount='".$bsalary."' WHERE employee_id='".$employee_id."' AND item_id='4' LIMIT 1 ");
		 $update2->execute();
		 //Lets Save this user's Gross Income
		 $update3 = $conn->prepare("UPDATE  ".$db_prefix."epayrolldata_rel.employee_items SET amount='".$gross_income."' WHERE employee_id='".$employee_id."' AND item_id='25' LIMIT 1 ");
		 $update3->execute();
        
}
$conn->commit();
}catch(PDOException $e){
$conn->rollBack();
die("<div class='alert alert-danger'>Database Error:- ".$e->getMessage()."</div>");
}
//Payroll Items
//$items = $conn->prepare("SELECT item_name, ie FROM epayrolldata_rel.items WHERE active='Y'");

?>