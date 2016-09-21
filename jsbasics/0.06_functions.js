
//Declaration
function helloWorld(){
	console.log("Hello World");
}

function aName(x){
	console.log(x);
}


//Call
helloWorld();
//Decleration
function printName(){
	console.log("Matt");
}
//Call
printName();


//Decleration 2
var name = function(){
	console.log("Matt");
}
//Call
name();

//Scope

function addNumbers(){
	var x = 10;
	var y = 10;
	console.log(x + y);
}

addNumbers();
addNumbers();

function multiplyNumbers(){
	var x = 5;
	var y = 4;
	console.log(x * y);
}

multiplyNumbers();

// Parameters & Arguments

function randomNumber(x){
	console.log("The number you entered was: " + x);
}
randomNumber(6);
randomNumber(9);


//Function
function pinNumber(x){ 
	console.log(x + " is the correct number.");
}
//Argument
pinNumber(1234);

//bankpin
function enterpin(wxyz){
	var pin = 1234;
	if (pin != wxyz){
		console.log("Pin not accepted");
	} else {
		console.log("Correct");
	}
}
enterpin(1235)


//Bronze Challange

function addCoupleStrings(x, y){
	console.log(x + y);
}

addCoupleStrings("Hello ", "All");

//Silver Challange
function calculateBills(x,y,z){
	console.log(x + y + z);
}
calculateBills(150, 25, 35);

//Gold Challange
function cokePurchase(numOfCoke, costOfSoda, tax){
	var totalCost = numOfCoke*costOfSoda + numOfCoke*costOfSoda*tax;
	console.log(totalCost);
}
cokePurchase(100, .99, .07);





