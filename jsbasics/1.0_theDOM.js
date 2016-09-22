//document.onLoad(alert("Hey Hey Hey!!"));
//console.log("Look at me.... we are working together!");
var hobbiesList = document.getElementById("hobby-lists");
console.log(hobbiesList);

var hobbies = document.getElementsByClassName("hobby");
console.log(hobbies[1].innerHTML);  //an array
console.log(hobbies[2].innerHTML);

function favoriteSong(){
	document.getElementById("favorite").innerHTML = "Freebird!";
}

favoriteSong();

function worstSong(){
	document.getElementById("worst").innerHTML = "Any country";
}
worstSong();

function bestSong(){
	document.getElementById("best").innerHTML = "Crawl";
}

bestSong();