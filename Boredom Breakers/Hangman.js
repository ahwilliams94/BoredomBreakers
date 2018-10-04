var word = "ANTONIO";
var badGuess = 0;

var d = document.getElementById("wordarea");


for(var i=0; i < word.length;i++){
	var di = document.createElement("div");
	var p = document.createElement("p");
	p.className = "letter";
	var node = document.createTextNode(word[i]);
	p.appendChild(node);
	di.append(p)
	d.appendChild(di);
	
}



function takeguess(){
	var x = document.getElementById("guess").value;
	
	var guesslen = x.length;
	if(guesslen == 1){
		CheckChar(x);
	}
	else{
		CheckWord(x);
	}
	document.getElementById("guess").value ="";
	document.getElementById("guess").focus();
	
}

function CheckChar(guess){
	var noMatch = true;
	var letters = document.getElementsByClassName("letter");
	for(var i =0; i < letters.length; i++){
		if(guess.toUpperCase() == letters[i].innerHTML){
			letters[i].style.visibility = "visible";
			noMatch = false;
		}
	}
	
	if(noMatch){
		badGuess++;
		ShowFailedLetter(guess);
		LoseCheck(badGuess);
		
	}
	
}

function CheckWord(guess){
	if(guess.toUpperCase() == word){
		alert("YOU WIN!!\n It took " + (badGuess+1) +" Guess(es)");
		location.reload(true);
	}
	else{
		badGuess++;
		ShowFailedWord(guess);
		LoseCheck(badGuess);
		
	}
}

function ShowFailedWord(guess){
	var goHere = document.getElementById("words");
	var p = document.createElement("p");
	var node = document.createTextNode(guess);
	p.appendChild(node);
	goHere.appendChild(p);
}

function ShowFailedLetter(guess){
	var goHere = document.getElementById("letters");
	var p = document.createElement("p");
	var node = document.createTextNode(guess);
	p.appendChild(node);
	goHere.appendChild(p);
}

function LoseCheck(numBad){
	if(badGuess == 6){
		var draw = document.getElementById("space");
		DrawRLeg(draw);
		alert("You Lose\n"+word);
		location.reload(true);
	}
	else{
		var draw = document.getElementById("space");
		switch(numBad){
			case 1:
				DrawHead(draw);
				break;
			case 2:
				DrawBody(draw);
				break;
			case 3:
				DrawLArm(draw);
				break;
			case 4:
				DrawRArm(draw);
				break;
			case 5:
				DrawLLeg(draw);
				break;
		}
	}
}

function DrawHead(draw){
	var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
	newElement.setAttribute("cx",700);
	newElement.setAttribute("cy",165);
	newElement.setAttribute("r",40);
	newElement.setAttribute("stroke", "black");
	newElement.setAttribute("fill","white");
	console.log(newElement);
	draw.appendChild(newElement);
}

function DrawBody(draw){
	var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	newElement.setAttribute("x1",700);
	newElement.setAttribute("y1",205);
	newElement.setAttribute("x2",700);
	newElement.setAttribute("y2",300);
	newElement.setAttribute("style","stroke:black;stroke-width:2")
	draw.appendChild(newElement);
}

function DrawLArm(draw){
	var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	newElement.setAttribute("x1",700);
	newElement.setAttribute("y1",225);
	newElement.setAttribute("x2",650);
	newElement.setAttribute("y2",225);
	newElement.setAttribute("style","stroke:black;stroke-width:2")
	draw.appendChild(newElement);
}

function DrawRArm(draw){
	var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	newElement.setAttribute("x1",700);
	newElement.setAttribute("y1",225);
	newElement.setAttribute("x2",750);
	newElement.setAttribute("y2",225);
	newElement.setAttribute("style","stroke:black;stroke-width:2")
	draw.appendChild(newElement);
}

function DrawLLeg(draw){
	var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	newElement.setAttribute("x1",700);
	newElement.setAttribute("y1",300);
	newElement.setAttribute("x2",650);
	newElement.setAttribute("y2",350);
	newElement.setAttribute("style","stroke:black;stroke-width:2")
	draw.appendChild(newElement);
}

function DrawRLeg(draw){
	var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	newElement.setAttribute("x1",700);
	newElement.setAttribute("y1",300);
	newElement.setAttribute("x2",750);
	newElement.setAttribute("y2",350);
	newElement.setAttribute("style","stroke:black;stroke-width:2")
	draw.appendChild(newElement);
}