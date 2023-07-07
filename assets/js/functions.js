$( document ).ready(function() {
	// Navigation à l'aide des liens
		
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();
// Afficher la première figure du slider
	var slideIndex = 1;
	slideShow(slideIndex);
// Afficher la figure précedente après un clic sur la flèche de gauche du slider
function slideLeft(){
	
	$('.slidingLeft').click(function(){
		slidePlus(-1);
				
	});
	
}
slideLeft();
// Afficher la figure suivante après un clic sur la flèche de droite du slider
function slideRight(){
	
	$('.slidingRight').click(function(){
		slidePlus(1);
				
	});
	
}
slideRight();
// Figure à afficher selon le choix de l'utilisateur
function slidePlus(n){
	slideShow(slideIndex+=n);
}

function slideShow(n){		
		
		var i;
		var myul = document.getElementById('banner_1');
		var myItems = myul.getElementsByTagName('li');
		if (n > myItems.length) {slideIndex = 1;}
		if (n < 1) {slideIndex = myItems.length;}
		for (i = 0; i <= myItems.length - 1; i++) { myItems[i].removeAttribute("class");}
		myItems[slideIndex-1].classList.add('active');
		console.log (myItems[slideIndex-1].className);
			
}
});


