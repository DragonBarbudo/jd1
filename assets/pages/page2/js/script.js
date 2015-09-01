
$(document).ready(function(){
    $('.ensalada div').click(function(){
        var correcto = $(this).attr('data-correcto');
        if(correcto=='true'){
            $(this).addClass('animated').addClass('tada');
            var theP = $(this).attr('data-p');
            $('#'+theP).show().addClass('animated').addClass('rollIn');
            sound("correct");
            contador+=1;
        } else {
            if(calificacion==2){calificacion=1;}
            if(calificacion==3){calificacion=2;}
            sound("error");
        }
        
            endApp(4);
        
    });
});