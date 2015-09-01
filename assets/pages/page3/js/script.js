
$(document).ready(function(){

    $( ".lobo, .cerdito, .casa" ).draggable({revert: "invalid", stack: ".dropper"});
    $( ".dropper" ).droppable({
        greedy: true,
        drop:function(event, ui){
            
            var right = ui.draggable.attr('id');
            var response = $(this).attr('data-r');
            if(right == response){
                ui.draggable.addClass('rightAnswer');
                setTimeout(function(){
                	ui.draggable.draggable( "destroy" );
                },50);
                 ui.draggable.removeClass('floating');
                $(this).droppable({ disabled: true });
                contador+=1;
                sound("correct");
                ui.draggable.css({'position':'absolute'});
                var posX = $(this).css('left'); 
                var posY = $(this).css('top'); 
                ui.draggable.css({'left':posX, 'top':posY});
            } else {
                ui.draggable.addClass('mochilaEX');
                sound("error");
				ui.draggable.css({'position':'relative'});
				ui.draggable.delay(500).animate({left:0, top:0});
                return false;
            }
            
           
            
            
                endApp(3);
        }
    });
    
});



