//definicao do plugin
$.fn.stepbanner = function(parametros){
	//Parametros / padrões
	var padroes = {
		time		: 4,
		obj		: $(this)
	};
	var current = 1;
	var size 		= $(padroes.obj).find("> ul li").size();
	//Estende  o objeto padroes
	var padrao = $.extend({}, padroes, parametros);
	
		
	//================ METODOS ==================
	
	//listas os marcadores numericos de de acordo com quantidade de imagens/itens
	var listItemNumber = function(){
		$(padrao.obj).prepend('<div><ul class="itemnumber"></ul></div>');
		for (i = 1; i <= size; i++) {
			$(padrao.obj).find("ul").append("<li>" + i + "</li>");
		}
	}
		
	//adiciona a classe "current" no numero atual/item
	var selectItemNumber = function(){
		$(".itemnumber li").removeClass("current");
		$(".itemnumber li:nth-child("+current+")").addClass("current");
	}
	
	//faz a troca dos itens/imagens
	var changeItem = function(){
		if (current <= size) {
			$(padrao.obj).find("> ul li").animate({opacity : 0.5}).hide();
			$(padrao.obj).find("> ul li:nth-child(" + current + ")").animate({opacity : 1}).show();
			selectItemNumber();
			current++;
		}
		else{
			current = 1;
		}
	}
	
	
	//============= CONSTRUÇÃO DA CLASSE =================
	$(padrao.obj).find("ul li:not(:first)").hide();
	listItemNumber();
	$(".itemnumber li").click(function(){
		current = $(this).text();
		changeItem();
	});
	changeItem();
	window.setInterval(changeItem,padrao.time * 1000);
};


$(function(){
	$(".stepbanner").stepbanner({time: 8});

	
	
	$("#modalVideo .modalbackground, #modalVideo .playervideo, #modalVideo .btclose").hide();	
	$(".videoThumb").click(function(){
		$("#modalVideo .modalbackground").show().css({opacity: 0});
		$("#modalVideo .modalbackground").animate({opacity: 0.9},1000);
		$("#modalVideo .btclose").fadeIn();
		$("#modalVideo .playervideo").slideDown();	
	})
	
	$("#modalVideo .btclose").click(function(){
		$("#modalVideo .modalbackground, #modalVideo .btclose").fadeOut();
		$("#modalVideo .playervideo").slideUp();
	})
	
	
	
	
	$("#box-faq ul li span").click(function(){
		$(this).parents("ul:eq(0)").find("li p").slideUp();
		$(this).parent().find("p").slideToggle();
	});
	
	
});






		
		
