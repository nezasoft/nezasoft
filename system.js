 $(document).ready(function(){
 $("#wait").hide(); 
 $("#invoices_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Invoice Reports";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/invoice_reports.html',function(responseTxt, statusTxt, jqXHR){
  if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#initiate_billing_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Initiate Billing";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/initiate_billing.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#reversal_requests_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Reversal Requests";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/reversal_requests.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 
 $("#statement_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Client Statements";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/client_statements.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#receipts_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Receipt Reports";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/receipt_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#proforma_invoice_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Proforma Invoice Reports";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/proforma_invoice_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#new_invoice_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
  document.title="Generate Invoice";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/generate_invoice.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#new_proforma_invoice_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
  document.title="Generate Proforma Invoice";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/generate_proforma_invoice.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#credit_notes_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
  document.title="Credit Note Reports";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/credit_note_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
  });
 
 $("#debit_notes_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
  document.title="Debit Note Reports";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/debit_note_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#receipt_account_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Receipt Account";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/receipt_account_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#credit_account_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Credit Account";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/credit_account_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
  $("#credit_requests_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
  document.title="Credit Note Requests";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/credit_note_requests.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#debit_account_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
  document.title="Debit Account";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/debit_account_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#transactions_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
  document.title="Transactions";
 $("#receivables_menu").removeClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").addClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/transactions.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#client_aging_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Debtors Aging";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/debtors_aging_combined_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#sales_vat_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Sales VAT Reports";
 $("#reports_menu").addClass("active");
 $('#page_content_display').load('views/reports/sales_vat_reports.html' ,function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#paybill_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Pay Bill";
 $("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/paybill.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#payment_voucher_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Payment Vouchers";
 $("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/payment_vouchers.html' ,function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#po_api_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Purchase Order>> API";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/po_api.html' ,function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#gl_api_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="GL >> API";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/gl_api.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#payable_invoices_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="API Reports";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/api_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#api_credit_note_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Credit Account";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/api_credit_note_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
  
 $("#api_credit_notes_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="API Credit Note Reports";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/api_credit_note_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#api_debit_note_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Debit Account";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/api_debit_note_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
  
 $("#api_debit_notes_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="API Debit Note Reports";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/api_debit_note_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#creditor_aging_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Creditor Aging Report";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/creditor_aging.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#creditor_statement_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Creditor Aging";
 $("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/creditor_statement_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });

 $("#purchases_vat_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Purchases VAT Reports";
 $("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/reports/purchases_vat_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#expenditure_reports_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Expenditure Reports";
 $("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/reports/expenditure_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#add_rate_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="New bank Rate";
 $("#banking_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/banking/new_bank_rate.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#view_rates_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Exchange Rates";
 $("#banking_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/banking/view_exchange_rates.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 

 $("#init_bank_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Initialize Bank Reconciliation";
 $("#banking_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/banking/initialize_bank_reconciliation.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#bank_recon_start_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Bank Reconciliation Start";
 $("#banking_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/banking/bank_reconciliation_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#add_bank_charge_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Add Bank Charge";
 $("#banking_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/banking/add_bank_charge.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#view_bank_charges_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Bank Charges";
 $("#banking_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/banking/view_bank_charges.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#sales_receipts_start_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Sales Receipts";
 $("#financial_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/financial/sales_receipts_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#basic_element_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Basic Elements";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/view_basic_elements.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#element_group_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Element Groups";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/view_element_groups.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#bank_accounts_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Bank Accounts";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/view_bank_accounts.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#chart_accounts_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Chart of Accounts";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/view_chart_of_accounts.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#gl_accounts_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="GL Accounts";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/view_gl_accounts.html' ,function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#journal_entry_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Journal Entry";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/journal_entry.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#journal_reports_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Journal Entries";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/view_journal_entries.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#journal_summary_start_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Journal Summary";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/journal_summary_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#balance_bf_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Balances B/F";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/balance_bf.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#account_types_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Account Types";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/view_account_types.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#depreciation_types_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Depreciation Types";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/view_depreciation_types.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#asset_registration_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="New Asset Registration";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/new_asset_registration.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#view_assets_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="View Assets";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/view_assets.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
  });
 
 $("#asset_depreciation_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Asset Depreciation";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/asset_depreciation.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#provisioned_assets_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Provisioned Assets";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/view_provisioned_assets.html' ,function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#asset_wear_tear_provisioning_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Provisioned Assets";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/view_provisioned_assets.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#provisioned_assets_wear_tear_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Provisioned Asset Wear & Tear";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/view_provisioned_assets_wear_tear.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
  });
 $("#statistics_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Provisioned Asset Wear & Tear";
 $("#statistics_link").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/dashboard2.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
  });
  
   $(document).ready(function(){
 $("#wait").hide(); 
 $("#invoices_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Invoice Reports";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/invoice_reports.html',function(responseTxt, statusTxt, jqXHR){
  if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#initiate_billing_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Initiate Billing";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/initiate_billing.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#statement_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Client Statements";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/client_statements.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#receipts_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Receipt Reports";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/receipt_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#proforma_invoice_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Proforma Invoice Reports";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/proforma_invoice_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#new_invoice_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
  document.title="Generate Invoice";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/generate_invoice.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#new_proforma_invoice_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
  document.title="Generate Proforma Invoice";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/generate_proforma_invoice.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#credit_notes_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
  document.title="Credit Note Reports";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/credit_note_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
  });
 
 $("#debit_notes_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
  document.title="Debit Note Reports";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/debit_note_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#receipt_account_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Receipt Account";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/receipt_account_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#credit_account_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Credit Account";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/credit_account_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
  $("#credit_requests_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
  document.title="Credit Note Requests";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/credit_note_requests.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#debit_account_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
  document.title="Debit Account";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/debit_account_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#transactions_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
  document.title="Transactions";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/transactions.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#client_aging_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Debtors Aging";
 $("#receivables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/receivables/debtors_aging_combined_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#sales_vat_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Sales VAT Reports";
 $("#reports_menu").addClass("active");
 $('#page_content_display').load('views/reports/sales_vat_reports.html' ,function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#paybill_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Pay Bill";
 $("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/paybill.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#payment_voucher_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Payment Vouchers";
 $("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/payment_vouchers.html' ,function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#po_api_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Purchase Order>> API";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/po_api.html' ,function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#gl_api_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="GL >> API";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/gl_api.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#payable_invoices_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="API Reports";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/api_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#api_credit_note_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Credit Account";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/api_credit_note_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
  
 $("#api_credit_notes_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="API Credit Note Reports";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/api_credit_note_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#api_debit_note_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Debit Account";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/api_debit_note_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
  
 $("#api_debit_notes_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="API Debit Note Reports";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/api_debit_note_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#creditor_aging_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Creditor Aging Report";
$("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/creditor_aging.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#creditor_statement_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Creditor Aging";
 $("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/payables/creditor_statement_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });

 $("#purchases_vat_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Purchases VAT Reports";
 $("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/reports/purchases_vat_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#expenditure_reports_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Expenditure Reports";
 $("#payables_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $('#page_content_display').load('views/reports/expenditure_reports.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#add_rate_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="New bank Rate";
 $("#banking_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/banking/new_bank_rate.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#view_rates_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Exchange Rates";
 $("#banking_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/banking/view_exchange_rates.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#control_bank_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Control A/C >> Bank";
 $("#banking_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/banking/control_bank.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#init_bank_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Initialize Bank Reconciliation";
 $("#banking_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/banking/initialize_bank_reconciliation.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
  $("#sell_currency_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Sell Currency";
 $("#banking_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/banking/sell_currency.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#bank_recon_start_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Bank Reconciliation Start";
 $("#banking_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/banking/bank_reconciliation_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#add_bank_charge_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Add Bank Charge";
 $("#banking_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/banking/add_bank_charge.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#view_bank_charges_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Bank Charges";
 $("#banking_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/banking/view_bank_charges.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#sales_receipts_start_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Sales Receipts";
 $("#financial_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/financial/sales_receipts_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#basic_element_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Basic Elements";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/view_basic_elements.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#element_group_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Element Groups";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/view_element_groups.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#bank_accounts_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Bank Accounts";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/view_bank_accounts.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#chart_accounts_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Chart of Accounts";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/view_chart_of_accounts.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 $("#gl_accounts_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="GL Accounts";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/view_gl_accounts.html' ,function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#journal_entry_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Journal Entry";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/journal_entry.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#journal_reports_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Journal Entries";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/view_journal_entries.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#journal_summary_start_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Hournal Summary";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/journal_summary_start.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#balance_bf_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Balances B/F";
 $("#journals_menu").addClass("active");
 $("#settings_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/journals/balance_bf.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#account_types_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Account Types";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/view_account_types.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#depreciation_types_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Depreciation Types";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/view_depreciation_types.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#asset_registration_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="New Asset Registration";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/new_asset_registration.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#view_assets_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="View Assets";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/view_assets.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
  });
 
 $("#asset_depreciation_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Asset Depreciation";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/asset_depreciation.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#provisioned_assets_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Provisioned Assets";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/view_provisioned_assets.html' ,function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#asset_wear_tear_provisioning_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Provisioned Assets";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/view_provisioned_assets.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
 });
 
 $("#provisioned_assets_wear_tear_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Provisioned Asset Wear & Tear";
 $("#settings_menu").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#financial_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/settings/view_provisioned_assets_wear_tear.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
  });
 $("#trial_balance_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Trial Balance";
 $("#financial_link").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#statistic_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/financial/trial_balance.html',function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "success"){
                $("#wait").hide();
            }
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
 });
  });
  
 $("#balance_sheet_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Balance Sheet";
 $("#financial_link").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#statistic_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/financial/balance_sheet.html',function(responseTxt, statusTxt, jqXHR){
    if(statusTxt == "success"){
     $("#wait").hide();
    }
    if(statusTxt == "error"){
      alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
    }
 });
  });
  
 $("#profit_loss_link").click(function(){
 $('#page_content_display').empty();
 $('#other_content').empty();
 $("#wait").show();
 document.title="Profit & Loss Statement";
 $("#financial_link").addClass("active");
 $("#journals_menu").removeClass("active");
 $("#banking_menu").removeClass("active");
 $("#statistic_menu").removeClass("active");
 $("#receivables_menu").removeClass("active");
 $("#payables_menu").removeClass("active");
 $('#page_content_display').load('views/financial/profit_loss.html',function(responseTxt, statusTxt, jqXHR){
    if(statusTxt == "success"){
     $("#wait").hide();
    }
    if(statusTxt == "error"){
      alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
    }
 });
  });
  
  
 });
 });