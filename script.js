var Tax=.07
var Tip=.05
var TotalBill=Number(prompt("What is your total bill?"));
var Taxes=TotalBill*Tax;
var TaxedBill=Taxes+TotalBill;
var Tip=TaxedBill*Tip;
var FinalBill=TaxedBill+Tip;
document.body.querySelector("#Final").innerHTML=FinalBill;