

$(function(){
	//Exemplo de Relatorio
	$("#container #content .content h2 a").toggle(
		function(){
			$("#container #content .content .exemploRelatorio ").animate({height: '888px'}, function(){ $("#container #content .content .exemploRelatorio .sombra").fadeOut() })
		}, 
		function(){
			$("#container #content .content .exemploRelatorio ").animate({height: '320px'}, function(){ $("#container #content .content .exemploRelatorio .sombra").fadeIn() });
		}
	);
	
	//Mostra e esconde as Abas ( conheça )
	$("#container .banner .home").click(	function(){
		$(this).fadeOut();
		$(this).parent().find(".conheca").fadeIn();
		
		$("#container .informacoesCaracteristicas .tabs").hide();
		$("#container .informacoesCaracteristicas .caracteristicas").fadeIn();
		return false;
	});
	$("#container .banner .conheca").click(	function(){
		$(this).fadeOut();
		$(this).parent().find(".home").fadeIn();
		
		$("#container .informacoesCaracteristicas .caracteristicas").hide();
		$("#container .informacoesCaracteristicas .tabs").fadeIn();
		return false;
	})
		

		
		
	
	//Abas ( Conheça )
	$("#container .informacoesCaracteristicas .tabs > li h3").click(function(){
		$("#container .informacoesCaracteristicas .tabs > .selected").removeClass("selected");
		$(this).parent().addClass("selected");
		
		$("#container .informacoesCaracteristicas .tabs > li > .content").hide();
		$(this).parent().find("> .content").show();
	});
	
});