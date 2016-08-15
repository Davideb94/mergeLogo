function throwAnimate(){
	animate();
	runAgain();
}

function animate(){
	var merge = document.querySelector(".merge");
	merge.className = "pumped_merge";
	
	merge.addEventListener("transitionend", answerAnimate);
}

function answerAnimate(){
	var merge = document.querySelector(".pumped_merge");
	merge.className = "merge";
}

function runAgain(){	
	var start = setTimeout(animate, 900);
}

var start = setInterval(throwAnimate, 3000);