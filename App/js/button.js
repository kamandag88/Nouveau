function showandhide(){

	document.getElementById("modulediv").style.visibility = "hidden";
	document.getElementById("logindiv").className = "show";
	document.body.style.backgroundImage = "url('img/2ndScreen.jpg')"
}

function showandhide2(){

	document.getElementById("logindiv").style.visibility = "hidden";
	document.getElementById("nextdiv").className = "show";
	document.body.style.backgroundImage = "url('img/3rdScreen.jpg')"
}

function showandhide3(){

	document.getElementById("nextdiv").style.visibility = "hidden";
	document.getElementById("next2div").className = "show";
	document.body.style.backgroundImage = "url('img/4thScreen.jpg')"
}

function showandhide4(){

	document.getElementById("next2div").style.visibility = "hidden";
	document.getElementById("startdiv").className = "show";
	document.body.style.backgroundImage = "url('img/5thScreen.jpg')"
}

function showandhide5(){

	document.getElementById("startdiv").style.visibility = "hidden";
	document.getElementById("timerdiv").className = "show";
	document.getElementById("infodiv").className = "show"
	document.body.style.backgroundImage = "url('img/6thScreen.jpg')"


}