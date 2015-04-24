$("input[type=button]").click(function(event) {
	var inputSugestao = $("input[type=text]");
	var sugestao = inputSugestao.val();

	var nomeSugestao = $("<span>").addClass("sugestao").text(sugestao);
	var votos = $("<span>").addClass("votos").text("1 voto");
	$("<li>").append(nomeSugestao).append(votos).appendTo( ".sugestoes");
	inputSugestao.val("").focus();	
});

$(".sugestoes").on("dblclick", "li", function(event) {
	$(this).remove();
});


$(".sugestao").addClass("sugestao-colorida");