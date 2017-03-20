var nav = document.getElementsByTagName('nav')[0];
var tabOfLi = nav.getElementsByTagName('li');
var content = document.getElementById("content");
var tabOfDiv = content.children;
for(var i =0; i< tabOfDiv.length; i++)
	tabOfDiv[i].classList.add('invisible');

for(var i =0; i< tabOfLi.length; i++)
	tabOfLi[i].addEventListener("click", clickMagic(i));

function clickMagic(i){
	return function() {
		toggleDisplay(tabOfDiv[i]);
	}
}

function toggleDisplay(element){
	var all =  element.parentNode.children;
	for(var i =0; i<all.length; i++){
		if(all[i].classList.contains('visible') && all[i] != element){
			fadeOut(all[i]);
			all[i].classList.remove('visible');
		}
		all[i].classList.add('invisible');
	}
	if(!element.classList.contains('visible')){
		element.classList.remove('invisible');
		element.classList.add('visible');
	}
	if(element.classList.contains('visible'))
		fadeIn(element);
}
function fadeOut(element){
	var opacity = 1;
	var timer = setInterval(function(){
		if(opacity <=0.1){
			clearInterval(timer);
			element.style.display="none";
		}
		element.style.opacity = opacity;
		opacity -= opacity*0.1;

	}, 10);
	
}
function fadeIn(element){
	var opacity = 0.1;
	element.style.display = "block";
	var timer = setInterval(function (){
		if(opacity >= 1)
			clearInterval(timer);
		element.style.opacity = opacity;
		opacity += 0.1;
	}, 100)
}
// function toggleDisplay(element){
// 	var all =  element.parentNode.children;
// 	for(var i =0; i<all.length; i++){
// 		all[i].classList.add('invisible');
// 		all[i].classList.remove('visible');
// 	}
// 	if(!element.classList.contains('visible')){
// 		element.classList.remove('invisible');
// 		element.classList.add('visible');
// 	}
// }
