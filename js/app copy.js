function redirecionar(pagina) {
    var valor = parseFloat(document.getElementById("inputValor").value);
    if (!isNaN(valor)) {
        window.location.href = pagina + "&valor=" + encodeURIComponent(valor);
    } else {
        alert("Por favor, insira um valor válido.");
    }
}

function adicionarHistorico(moeda, valorDigitado, valorConvertido) {
    var tableRef = document.getElementById('historico').getElementsByTagName('tbody')[0];

    // Insere uma linha no fim da tabela
    var newRow = tableRef.insertRow();

    // Insere células na nova linha
    var moedaCell = newRow.insertCell(0);
    var valorDigitadoCell = newRow.insertCell(1);
    var valorConvertidoCell = newRow.insertCell(2);

    // Adiciona os valores às células
    moedaCell.appendChild(document.createTextNode(moeda));
    valorDigitadoCell.appendChild(document.createTextNode(valorDigitado));
    valorConvertidoCell.appendChild(document.createTextNode(valorConvertido));
}
function realizarConversao(moeda) {
    var valor = parseFloat(document.getElementById("inputValor").value);
    var resultado;
    
    switch(moeda) {
        case 'usd':
            resultado = valor / 5.17;
            break;
        // Adicione os outros casos conforme necessário
    }

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Resultado: " + resultado.toFixed(2);
}