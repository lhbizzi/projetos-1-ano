function exe3(){
    let codigos = []
    let estoque = []
    for(let i=0;i<5;i++){
        codigos.push(Number(prompt(`Informe cÃ³digo`)))
        estoque.push(Number(prompt(`Informe qtde`)))
    }
    let cliente = Number(prompt(`Informe cÃ³digo do cliente`))
    do {
        let produto = Number(prompt(`Informe cÃ³digo do produto para compra`))
        // verifica se o produto existe
        let achou = false // nÃ£o achou
        let i
        for(i=0;i<5;i++){
            if (produto == codigos[i]){
                achou = true
                break // sai do for
            }
        }
        if (!achou){
            alert(`Produto inexistente`)
        }
        else {
            // achou
            let quantidade = Number(prompt(`Qtde da compra`))
            if (quantidade <= estoque[i]){
                // atualiza o estoque
                estoque[i] = estoque[i] - quantidade
                alert(`Compra realizada com sucesso`)
            }
            else {
                alert(`Qtde insuficiente`)
            }
        }
        cliente = Number(prompt(`Informe novo cliente, digite 0 para encerrar`))
    }
    while (cliente != 0)

}