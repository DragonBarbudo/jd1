var pagenumber;
var nextPage;
var hash;


//descargar archivos
var path, filename;


var Appnumber = 0;
var flores = new Array('actividades', 'guia', 'videos', 'audios', 'imprimibles');

$(document).ready(function(){
	
	
	
    $.ionSound({
        sounds: [   
            "correct",
            "error",
            "ok",
            "click",
			"s_actividades",
			"s_guia",
			"s_videos",
			"s_imprimibles",
			"s_audios",
			'park'
        ],
        volume: "0.9",
        path: "assets/sounds/"
    });
	
	
	
	// DESCARGAR ARCHIVOS [se añadieron var al inicio del archivo]
	
	$('.listadoImprimibles a, .listadoGuia a ').click(function(e){
		e.preventDefault();
		path = $(this).attr('href');
		filename = path.lastIndexOf('/');
		filename = path.substring(filename+1);
		chooser.trigger('click');
	});
	var chooser = $('#fileDialog');
	chooser.change(function(evt){
		
		 var fs = require('fs');
		 var userPath = this.value;
		 var newpath = userPath.replace(/\..+$/, '')+'_'+filename;
		  var file = fs.createWriteStream(newpath);
		  fs.readFile(path, function(err, data){
			  file.write(data);
			  file.end();
		  }); 
	});
	
	
	//audio players [se añadio preload]
	
	$("#jquery_jplayer_1").jPlayer({
		ready: function () { $(this).jPlayer("setMedia", { oga: "assets/audios/1gusanito.ogg" }); },
		play: function() {  $(this).jPlayer("pauseOthers"); },
		supplied: "oga", smoothPlayBar: true, keyEnabled: true, preload:'auto'
	});
	
	$("#jquery_jplayer_2").jPlayer({
		ready: function () { $(this).jPlayer("setMedia", { oga: "assets/audios/2ratones.ogg" }); },
		play: function() {  $(this).jPlayer("pauseOthers"); },
		supplied: "oga", smoothPlayBar: true, keyEnabled: true, cssSelectorAncestor: "#jp_container_2", preload:'auto'
	});
	
	$("#jquery_jplayer_3").jPlayer({
		ready: function () { $(this).jPlayer("setMedia", { oga: "assets/audios/3rana.ogg" }); },
		play: function() {  $(this).jPlayer("pauseOthers"); },
		supplied: "oga", smoothPlayBar: true, keyEnabled: true, cssSelectorAncestor: "#jp_container_3", preload:'auto'
	});
	
	$("#jquery_jplayer_4").jPlayer({
		ready: function () { $(this).jPlayer("setMedia", { oga: "assets/audios/4lola.ogg" }); },
		play: function() {  $(this).jPlayer("pauseOthers"); },
		supplied: "oga", smoothPlayBar: true, keyEnabled: true, cssSelectorAncestor: "#jp_container_4", preload:'auto'
	});
	
	$("#jquery_jplayer_5").jPlayer({
		ready: function () { $(this).jPlayer("setMedia", { oga: "assets/audios/5patito.ogg" }); },
		play: function() {  $(this).jPlayer("pauseOthers"); },
		supplied: "oga", smoothPlayBar: true, keyEnabled: true, cssSelectorAncestor: "#jp_container_5", preload:'auto'
	});
	
	
	
	//videos
	
	$("#jquery_jplayer_6").jPlayer({
		ready: function () { $(this).jPlayer("setMedia", { ogv: "assets/videos/cumpleanos.ogv", }); },
		play: function() {  $(this).jPlayer("pauseOthers"); }, 
		supplied: "ogv", smoothPlayBar: true, keyEnabled: true, cssSelectorAncestor: "#jp_container_6",
		size: { width: "680px", height: "460px", cssClass: "jp-videoPlayer" }
	});
	$("#jquery_jplayer_7").jPlayer({
		ready: function () { $(this).jPlayer("setMedia", { ogv: "assets/videos/arbol.ogv", }); },
		play: function() {  $(this).jPlayer("pauseOthers"); }, 
		supplied: "ogv", smoothPlayBar: true, keyEnabled: true, cssSelectorAncestor: "#jp_container_7",
		size: { width: "680px", height: "460px", cssClass: "jp-videoPlayer" }
	});
	$("#jquery_jplayer_8").jPlayer({
		ready: function () { $(this).jPlayer("setMedia", { ogv: "assets/videos/arenero.ogv", }); },
		play: function() {  $(this).jPlayer("pauseOthers"); }, 
		supplied: "ogv", smoothPlayBar: true, keyEnabled: true, cssSelectorAncestor: "#jp_container_8",
		size: { width: "680px", height: "460px", cssClass: "jp-videoPlayer" }
	});
	$("#jquery_jplayer_9").jPlayer({
		ready: function () { $(this).jPlayer("setMedia", { ogv: "assets/videos/tienda.ogv", }); },
		play: function() {  $(this).jPlayer("pauseOthers"); }, 
		supplied: "ogv", smoothPlayBar: true, keyEnabled: true, cssSelectorAncestor: "#jp_container_9",
		size: { width: "680px", height: "460px", cssClass: "jp-videoPlayer" }
	});
	$("#jquery_jplayer_10").jPlayer({
		ready: function () { $(this).jPlayer("setMedia", { ogv: "assets/videos/pintores.ogv", }); },
		play: function() {  $(this).jPlayer("pauseOthers"); }, 
		supplied: "ogv", smoothPlayBar: true, keyEnabled: true, cssSelectorAncestor: "#jp_container_10",
		size: { width: "680px", height: "460px", cssClass: "jp-videoPlayer" }
	});
	
	
		//back2menu  video
		$('.listadoVideos #back2menu, .button_back2menu').click(function(){
			sound('click');
			$('.jpVideo').hide();
			$('.listadoVideos #back2menu').hide();
			$.jPlayer.pause();
		});
	
	
		//Video bts
		$('.videoBtn').click(function(){
			var showVideo = $(this).attr('data-video');
			$('#'+showVideo).show();
			$('.listadoVideos #back2menu').show();
			sound('click');
		});
	
	
	
	
	
	//Créditos
	$('.closecredits').click(function(){
		$('.creditos').slideUp();
	});
	$('#_castillo').click(function(){
		$('.creditos').slideToggle();
		$('.helpText').slideUp();
	});
	$('.help, #_sun').click(function(){
		$('.helpText').slideToggle();
		$('.creditos').slideUp();
	});
	
	
	//HOME "reset" back
	$('#_home').click(function(){
		$.jPlayer.pause();
		sound('click');
		sound('park');
		$('.mainApplication').removeClass('actividades guia videos audios imprimibles');
		$('.mainApplication').addClass('cover');
	});
	
	//Jardin BGcolor
	var jardinbgcolor = Snap('#_jardinbgcolor');
	Snap.load('assets/img/jardinbgcolor.svg', function(data){
		jardinbgcolor.append(data);
	});
	//Extras load
	var extras = Snap('#_extras');
	Snap.load('assets/img/extras.svg', function(data){ 
		extras.append(data);
		var snail = extras.select('#snail');
		var flower = extras.select('#flower');
		var frog = extras.select('#frog');
		var casa = extras.select('#casa');
		var bird = extras.select('#bird');
		snail.transform("t-310,0");
		flower.transform("t-110,0");
		frog.transform("t295,0");
		casa.transform("t88,0");
		bird.transform("t88,0");
	});
	
	
	//Actividades
	$('.listadoActividades ul li').click(function(){
		sound('click');
		Appnumber = $(this).attr('data-app');
		$('.listadoActividades').hide();
        var to = 'assets/pages/page'+Appnumber+'/index.html';
        $('.actividadesSection #back2menu').show();
		$('.appContainer').show().html('<iframe src="'+to+'" width="100%" height="100%"></iframe>');
	});
	//back2menu 
	$('.actividadesSection #back2menu, .button_back2menu').click(function(){
		sound('click');
		$('.listadoActividades').show();
		$('.appContainer').empty().hide();
		$('.actividadesSection #back2menu').hide();
        $('.resultadoStars, .modal').slideUp();
	});
	//next
	$('.button_next').click(function(){
		sound("click");
        $('.resultadoStars, .modal').slideUp();
        Appnumber = (Appnumber*1)+1;
		console.log(Appnumber);
		if(Appnumber>15){ Appnumber = 1; }
        var to = 'assets/pages/page'+Appnumber+'/index.html';
        $('#back2menu').show();
		$('.appContainer').show().html('<iframe src="'+to+'" width="100%" height="100%"></iframe>');
	});

	
	
	
	//BG Sound
	sound('park');

	
	
	
	
	for(i=0; i<flores.length;i++){
		createFlower(flores[i]);
	}
});


function createFlower(flowerName){
	window[flowerName] = Snap('#f_'+flowerName);
	Snap.load('assets/img/f_'+flowerName+'.svg', function(data){ 
	
		window[flowerName].append(data);
		
		var flower_top = window[flowerName].select('#'+flowerName+'_x5F_top');
		var flower_text = window[flowerName].select('#'+flowerName+'_x5F_text');
		var flower_tallo = window[flowerName].select('#'+flowerName+'_x5F_tallo');
		
		flower_text.transform("s0");
		flower_tallo.transform("t0,1");
		flower_top.transform("t0,60");
		//hover
		window[flowerName].hover(function(){
			if($('.mainApplication').hasClass('cover')){
			flower_top.animate( {transform:"t0,0" }, 200, mina.easein);
			flower_text.transform("s1");
			flower_tallo.transform("s0");
			}
		}, function(){
			if($('.mainApplication').hasClass('cover')){
			flower_top.animate( {transform:"t0,60" }, 200, mina.easein);
			flower_text.transform("s0");
			flower_tallo.transform("s1");
			}
		});
		//click
		window[flowerName].click(function(){	
			$('.creditos').slideUp();
			$('.helpText').slideUp();		
			if($('.mainApplication').hasClass('cover')){
				$.ionSound.stop('park');
				sound('click');
				$('.mainApplication').removeClass('cover actividades guia videos audios imprimibles');
				$('.mainApplication').addClass(flowerName);
				
				for(fi=0; fi<flores.length;fi++){
					window[flores[fi]].select('#'+flores[fi]+'_x5F_top').animate( {transform:"t0,60" }, 200, mina.easein);
					window[flores[fi]].select('#'+flores[fi]+'_x5F_text').transform("s0");
					window[flores[fi]].select('#'+flores[fi]+'_x5F_tallo').transform("s1");
				}
			}
		});
		
		//hover
		window[flowerName].hover(function(){
			if($('.mainApplication').hasClass('cover')){
			sound('s_'+flowerName);
			}
		});
		
	});
}




function checkPageNumber(){
    pagenumber = hash.replace('page','');
    pagenumber = pagenumber.replace('#','');
    pagenumber = pagenumber*1;
    if(pagenumber==15){
        nextPage = 1;
    } else {
        nextPage = pagenumber+1;
    }
}

window.addEventListener('message', function(e){
    var v = e.data;
	sound('ok');
    if(v){
        $('.resultadoStars, .modal').show();
        switch(v){
            case 1:
                $('.resultadoStars .stars').html('<div class="star live animated tada " id="star1"></div> <div class="star death animated bounceInDown" id="star2"></div> <div class="star death animated bounceInDown" id="star3"></div>');
                break;
            case 2:
                $('.resultadoStars .stars').html('<div class="star live animated tada " id="star1"></div> <div class="star live animated tada " id="star2"></div> <div class="star death animated bounceInDown" id="star3"></div>');
                break;
             case 3:
                $('.resultadoStars .stars').html('<div class="star live animated tada " id="star1"></div> <div class="star live animated tada " id="star2"></div> <div class="star live animated tada " id="star3"></div>');
                break;
        }
    }
});



function sound(Sname){
    $.ionSound.play(Sname);
};
