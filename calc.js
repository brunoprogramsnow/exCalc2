var calculations = new Firebase("https://excalc.firebaseio.com/"); 

//grabs user input
$('#calculateButton').on("click", function(){ 
	var propertyN= $('#propertyNInput').val().trim();
	var purchaseP = $('#purchasePInput').val().trim(); 
	var capitalI = $('#capitalIInput').val().trim(); 
	var saleP = $('#salePInput').val().trim(); 
	var selectState= $('#selectStateInput').val().trim();  
	var selectIncomeS = $('#selectIncomeS').val().trim(); 
	var selectIncomeM = $('#selectIncomeM').val().trim(); 

	
//creates a temp object in firebase 
var newCalc ={ 
	PropertyName: propertyN,
	PurchasePriceofProperty: purchaseP, 
	CapitalImprovements: capitalI, 
	SalePriceofProperty: saleP, 
	State: selectState, 
	IncomeSingle: selectIncomeS,
	IncomeMarried: selectIncomeM
} 
//Uploads employee data to database 
calculations.push(newCalc); 

// function marital(){
// 	if $('#selectIncomeS').on("click", function(){
// 		$('#selectIncomeM').fadeOut("slow");
// 	}else $('#selectIncomeS').fadeOut("slow");
// }

// //logs all info to console
console.log(newCalc.PropertyName);
console.log(newCalc.PurchasePriceofProperty); 
console.log(newCalc.CapitalImprovements); 
console.log(newCalc.SalePriceofProperty); 
console.log(newCalc.State); 
console.log(newCalc.IncomeSingle);
console.log(newCalc.IncomeMarried);  




// //Alerts that new propert was added
swal("Success!", "New property details added", "success")

// //Clears all text boxes 
	$("propertyNInput").val(""); 
	$("purchasePInput").val("");
	$("capitalIInput").val("");
	$("salePInput").val(""); 

//Prevents moving to new page 
	return false;
}); 



calculations.on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val()); 

	var propertyN= childSnapshot.val().PropertyName
	var purchaseP =Number(childSnapshot.val().PurchasePriceofProperty)
	var capitalI = Number(childSnapshot.val().CapitalImprovements)
	var saleP = Number(childSnapshot.val().SalePriceofProperty)
	var selectState= Number(childSnapshot.val().State);   
	var selectIncomeS = Number(childSnapshot.val().IncomeSingle)
	var selectIncomeM = Number(childSnapshot.val().IncomeMarried)
	

	console.log(typeof propertyN);
	console.log(typeof purchaseP);
	console.log(typeof capitalI);
	console.log(typeof saleP);
	console.log(typeof selectState); 
	console.log(typeof selectIncomeS);
	console.log(typeof selectIncomeM); 
	


//calculations

var net= purchaseP + capitalI; 

var netGain = saleP - net ; 


function calc(){

	if($('#selectIncomeM').val()==='2'){
		var compoundTax= Number(selectState)+Number(selectIncomeS)  
	} 
	if($('#selectIncomeS').val() ==='1'){
		var compoundTax= Number(selectState)+ Number(selectIncomeM)
	}


	var eSavings= netGain*compoundTax 



//appending to saved properties field 


  

$("#propertyTable").append("<tr><td>" + propertyN +"</td><td>" + netGain + "</td><td>" + compoundTax + "</td><td>" + eSavings + "<td></tr>");

};

calc();
})













