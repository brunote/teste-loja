var inputs = document.querySelectorAll("#carrinho input");

for(var i = 0; i < inputs.length; i++) {

	inputs[i].addEventListener("input", function(event) {
	console.log(inputs.length)
		var input = this;

		var li = input.parentNode.parentNode.parentNode;

		var spans = li.querySelectorAll("span");

		var spanValorUnitario = spans[0];

		console.log(spanValorUnitario.textContent);

		var spanValorTotal = spans[1];

		var quantidade = input.value;
		var valorUnitario = realParaNumber(spanValorUnitario.textContent);
		var novoTotal = quantidade * valorUnitario;
		spanValorTotal.textContent = numberParaReal(novoTotal);

	});
}