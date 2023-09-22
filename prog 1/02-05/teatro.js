function teatro(){
    let inicio = Number(document.getElementById("inicio").value)
    let fim = Number(document.getElementById("fim").value)
    let valor = inicio
    let qtde = 120
    let lucro
    let maiorLucro = 0
    let maiorQtde = 0
    let maiorValor = 0
    let conteudo = ""
    while (valor >= fim){
        lucro = (qtde * valor) - 200
        conteudo = conteudo + `<tr><td>R$ ${valor.toFixed(2)}</td><td>${qtde}</td><td>R$ 200.00</td><td>R$ ${lucro.toFixed(2)}</td></tr>`
        if (lucro > maiorLucro){
            maiorLucro = lucro
            maiorQtde = qtde
            maiorValor = valor
        }
        qtde = qtde + 26
        valor = valor - 0.50
    }
    document.getElementById("corpo").innerHTML = conteudo
    document.getElementById("result").innerHTML = `Maior lucro ${maiorLucro} - Qtde: ${maiorQtde} - Valor: ${maiorValor}`
}

