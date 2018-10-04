var sound = true;

function toggle(){
	sound = !sound;
	ChangePic(sound);
}

function ChangePic(sound){
	var el = document.getElementById("soundPic")
	if(sound == true){
		el.src = "unmute.png";
	}
	else{
		el.src = "mute.png";
	}
}