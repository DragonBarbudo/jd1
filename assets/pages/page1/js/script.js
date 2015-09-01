$(document).ready(function(){
    
    
    $( ".mochila" ).draggable({revert: "invalid", stack: ".locker"});
    $( ".locker" ).droppable({
        greedy: true,
		activate:function(event,ui){
			ui.draggable.data('posX', ui.position.left);
			ui.draggable.data('posY', ui.position.top);
		},
        drop:function(event, ui){
            
            var right = ui.draggable.attr('id');
            var response = $(this).attr('data-r');
            if(right == response){
                ui.draggable.addClass('mochilaEV');
                setTimeout(function(){
                	ui.draggable.draggable( "destroy" );
                },50);
				
                
				$(this).droppable({ disabled: true });
                sound("correct");
                contador+=1;
                ui.draggable.css({'position':'absolute'});
                var posX = $(this).css('left'); 
                var posY = $(this).css('top'); 
                ui.draggable.css({'left':posX, 'top':posY});
				endApp(6);
            } else {
                ui.draggable.addClass('mochilaEX');
                sound("error");
				ui.draggable.delay(500).animate({left:ui.draggable.data('posX'), top:ui.draggable.data('posY')});
				if(calificacion>1){ calificacion-=1; }
                return false;
            }
        }
    });    
});


