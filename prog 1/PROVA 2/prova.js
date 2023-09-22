function prova(){
    let model = [], qntd = [], clas = [], menor, maior, cont = 0//declaração das variáveis
    for(i=0; i<3; i++){//for para entrada de dados
        model.push(prompt(`Informe o modelo do ${i+1}° computador:`))
        qntd.push(prompt(`Informe a quantidade em estoque do ${i+1}° computador:`))
            while(qntd[i] < 0){
                if(qntd[i] < 0){
                alert(`Quantidade Inválida! O valor não pode ser negativo!`)
                qntd[i] = ``
                qntd.push(prompt(`Informe a quantidade em estoque do ${i+1}° computador novamente:`))
                }
            }
        clas.push(prompt(`Informe a classificação do ${i+1}° computador (gamer, notebook, desktop):`))
            while(clas[i] != `gamer` && clas[i] != `notebook` && clas[i] != `desktop`){
                if(clas[i] != `gamer` && clas[i] != `notebook` && clas[i] != `desktop`){//conferindo se a classificação bate com as descritas
                alert(`Classificação inválida!`)
                clas[i] = ``
                clas.push(prompt(`Informe a classificação do ${i+1}° computador (gamer, notebook, desktop) novamente:`))
                }
            }
    }
    let achou = false//encotrou o produto
    let nome = prompt(`Informe o nome do produto desejado!:`)
    do{
        for(i=0; i<3; i++){
            if (nome == model[i]){
                achou = true
                break // sai do for
            } 
            if (!achou){
                alert(`Produto inexistente`)
            }
            else {
                // achou
                let quantidade = Number(prompt(`Qtde da compra`))
                let modelo = prompt(`Informe o modelo desejado`)
                if (quantidade <= estoque[i]){
                    // atualiza o estoque
                    qntd[i] = qntd[i] - quantidade
                    clas[i] = clas[i] - modelo
                    alert(`Compra realizada com sucesso`)
                    cont++
                }
                else {
                    alert(`Qtde insuficiente`)
                }
            }
        }
    }
    while (achou = false)
}