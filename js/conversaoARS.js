var arr = [];

        function realizarConversao() {
            var valor = parseFloat(document.getElementById("inputValor").value);
            var resultado = valor *168.78; 
            arr.push({ valorDigitado: valor, resultado: resultado.toFixed(2) });
            atualizarTabela();
        }

        function atualizarTabela() {
            var tabela = document.getElementById("tabelaResultados").getElementsByTagName('tbody')[0];
            tabela.innerHTML = ""; 

            arr.forEach(function(item) {
                var linha = tabela.insertRow();
                var colunaValorDigitado = linha.insertCell(0);
                var colunaResultado = linha.insertCell(1);

                colunaValorDigitado.innerText = item.valorDigitado;
                colunaResultado.innerText = item.resultado;
            });
        }