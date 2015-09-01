var contador = 0;

var calificacion = 3;



$(document).ready(function(){
	
	
	
	
    $('.goBtn').click(function(){
        //$('header').slideUp();
        $('header').addClass('playing');
		sound("click");
    });

    
    
    
    $.ionSound({
        sounds: [   
	        "correct",
	        "error",
	        "ok",
	        "click"
        ],
        volume: "0.9",
        path: "../../sounds/"
    });
    
    
    
    
    
});


function sound(Sname){
    $.ionSound.play(Sname);
};


function endApp(number){
    if(contador==number){
        window.parent.postMessage(calificacion, "*");
        sound("ok");
    }
}