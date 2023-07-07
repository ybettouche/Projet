$( document ).ready(function() {
	
function nav(){
	
				$('.nav')[0].className = "nav close";
				$('.nav-toggle').click(function(){
				var x = $('.nav')[0].className;
				
				if (x == "nav close"){
						$('.nav')[0].className = "nav open";
						console.log(x);										
					}
					else{
							$('.nav')[0].className = "nav close";
							console.log(x);						;		
								
						}
			
		
			
						
	});
}
nav();
});

