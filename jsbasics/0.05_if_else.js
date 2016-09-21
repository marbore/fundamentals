var elevatorUp = false;
var elevatorBroken= true;
var elevatorDown = false;
var elevatorStop = false;

if (elevatorUp === true) {
	console.log("Going up");
} else {
	console.log("The elevator is either broken or going down");
}

//Write one for elevator broken
if (elevatorUp === true) {
	console.log("Going up");
} else {
	console.log("Elevator is Broken")
}

//Write one for elevator stopped
if (elevatorStop){
	console.log("I'm stopped, quit pounding that button!!")
} else {
	console.log("I'm moving as quickly as possible")
}

//Write one for elevator going down

if (elevatorDown || elevatorUp) {
	console.log("Please keep your arms and legs inside the elevator");
} else {
	console.log("You've reached your destination");
}