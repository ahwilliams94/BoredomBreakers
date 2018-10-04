var numDiscs = 3;

var color = ["red","green","blue","orange","purple"];

function disc(size,slab){
	this.size = size;
	this.slab = slab;
}

var tower1 = new Array();
var tower2 = new Array();
var tower3 = new Array();

var oneUp = false;

var held;

var h = document.getElementById("height").height.baseVal.valueInSpecifiedUnits/numDiscs;
var w = document.getElementById("width").width.baseVal.valueInSpecifiedUnits;
var wDiff = 10;
var startx = document.getElementById("width").x.baseVal.valueInSpecifiedUnits;
var xDiff = 5;
var starty = document.getElementById("width").y.baseVal.valueInSpecifiedUnits;

var solDiv = document.getElementById("solution");


function pickOrPlace(tower,id){
	console.log(oneUp);
	if(oneUp){
		place(tower,id);
	}
	else{
		pickUp(tower,id);
	}
	
	console.log(tower1);
	console.log(tower2);
	console.log(tower3);
}


function pickUp(tower, id){
	if(tower.length > 0){
		held = tower.pop();
		var space = document.getElementById(id);
		space.removeChild(held.slab);
		var spave = document.getElementById("store");
		spave.appendChild(held.slab);
		oneUp = true;
	}
}

function place(tower, id){
	var space = document.getElementById(id);
	if(tower.length == 0){
		held.slab.setAttribute("y",(starty - h - (h*tower.length))+"%");
		tower.push(held);
		space.appendChild(held.slab);
		oneUp = false;
	}
	else{
		if(tower[tower.length - 1].size > held.size){
			held.slab.setAttribute("y",(starty - h - (h*tower.length))+"%");
			tower.push(held);
			space.appendChild(held.slab);
			oneUp = false;
			if(tower2.length == numDiscs || tower3.length == numDiscs){
				alert("YOU WIN \n Try more discs...or do 5 again");
			}
		}
		else{
			console.log("too big");
		}
	}
}



function drawInit(){
	
	
	var space = document.getElementById("tower1");
	console.log(space);
	
	numDiscs = document.getElementById("numDiscs").value;
	console.log(numDiscs);
	
	setUp();
	
	
	
	
	for(var i = 0; i < numDiscs; i++){
	
		var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
		newElement.setAttribute("height",h+"%");
		newElement.setAttribute("width",(w - (wDiff*i))+"%");
		newElement.setAttribute("x",(startx + (xDiff*i))+"%");
		newElement.setAttribute("y",(starty - h - (h*i))+"%");
		newElement.style.fill = color[numDiscs-i-1];
		
		var newb = new disc((5-i),newElement);
		console.log(newb);
		tower1.push(newb);
		space.appendChild(newElement);
	}
	
}

function drawReset(){
	location.reload(true);
}

function setUp(){
	h = document.getElementById("height").height.baseVal.valueInSpecifiedUnits/numDiscs;
	w = document.getElementById("width").width.baseVal.valueInSpecifiedUnits;
	startx = document.getElementById("width").x.baseVal.valueInSpecifiedUnits;
	starty = document.getElementById("width").y.baseVal.valueInSpecifiedUnits;
}

function makeRoom(){
	
	while(tower1.length > 0){
		var tow1 = document.getElementById("tower1");
		tow1.removeChild(tower1.pop().slab);
	}
	
	while(tower2.length > 0){
		var tow2 = document.getElementById("tower2");
		tow2.removeChild(tower2.pop().slab);
	}
	
	while(tower3.length > 0){
		var tow3 = document.getElementById("tower3");
		tow3.removeChild(tower3.pop().slab);
	}
	
	if(oneUp){
		var keep = document.getElementById("store");
		keep.removeChild(held.slab);
		oneUp = false;
		held = null;
	}
	
	
	
	drawInit();
}

function solve(){
	solveTower(numDiscs,1,3);
}

function solveTower(d, initial, end){
	if(d == 1){
		var sol = document.createTextNode("Move from tower "+ initial + " to tower " + end);
		var br = document.createElement("br");
		solDiv.appendChild(sol);
		solDiv.appendChild(br);
	}
	else{
		solveTower(d-1, initial, 6 - initial - end);
		var sol = document.createTextNode("Move from tower "+ initial + " to tower " + end);
		var br = document.createElement("br");
		solDiv.appendChild(sol);
		solDiv.appendChild(br);
		solveTower(d-1, 6 - initial - end, end);
	}
}



