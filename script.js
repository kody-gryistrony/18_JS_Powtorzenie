var nav = document.getElementsByTagName('nav')[0];
var li = nav.getElementsByTagName('li');
var content = document.getElementById('content');
var tabOfDiv = content.children;


//klikanie na nawigacje
for(var i =0; i< li.length; i++){
	li[i].addEventListener('click', klikniete(i));
}

//////fadeIn/fadeOut

function fadeIn(element){
	var opacity = 0.1;
	
	element.style.opacity = opacity;
	
	var timer = setInterval(function(){
		if(opacity >= 1){
			clearInterval(timer);
		}
		opacity += .1;
		element.style.opacity = opacity;
	}, 100);
}

function fadeOut(element){
	var opacity = 1;
	if(element.classList.contains('invisible')){
		element.style.opacity = opacity;
	}
	var timer = setInterval(function(){
		if(opacity <= .1){
			clearInterval(timer);
		}
		opacity -= .1;
		element.style.opacity = opacity;
	}, 100);
}

///////////////////


//zniknij mi elementy
function zniknijWszystko(){
	for(var i =0; i < tabOfDiv.length; i++){
		fadeOut(tabOfDiv[i]);
		setTimeout(
			tabOfDiv[i].classList.add('invisible')
		, 100);
		if(tabOfDiv[i].classList.contains('invisible'))
		   tabOfDiv[i].classList.remove('visible');
	}
}
zniknijWszystko();

//pojaw element na kliknięcie
function klikniete(i){
	return function(){
		toggleDisplay(tabOfDiv[i]);
	}
}

function toggleDisplay(element){
	zniknijWszystko();
	if(!element.classList.contains('visible')){
		element.classList.remove('invisible');
		element.classList.add('visible');
		fadeIn(element);
	}
}

function wtf(arg){
	console.log(arg);
}
