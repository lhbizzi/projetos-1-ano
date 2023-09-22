function farmacia(){//meu
    let dadosFarm = [], remedios = []
    for(let i=0; i<2; i++){
        let dados = {
            nome: prompt(`Informe o nome da farmácia: `).toLowerCase(),
            endereço: prompt(`Informe o endereço da farmácia: `).toLowerCase(),
            codigo: Number(prompt(`Informe o código da farmácia: `)),
        }
        let achou = false
        for(let j=0;j<dadosFarm.length;j++){
            if (dadosFarm[i].codigo == dados.codigo){
                achou = true
                alert(`Cadastre outra farmácia!`)
            }
        }
        if (!achou){
            dadosFarm.push(dados)
        }
        else{} 
    }
    for(let i=0; i<2; i++){
        let infos = {
            cod: Number(prompt(`Informe a farmácia que deseja adicionar estoque: `)),
            nomeRem: prompt(`Informe o nome do remédio: `).toLowerCase(),
            qtde: Number(prompt(`Informe a quantidade em estoque: `)),
            preco: Number(prompt(`Informe o preço do remédio: `))
        }
        while(dadosFarm[i].codigo != infos.cod){
            infos[i].cod = Number(prompt(`Informe uma farmácia existente: `))
        }
        remedios.push(infos)
    }                  
    

}
function principal(){
    let vetor = []
}
function declaraFarm(vetor){
    let farmacias = [] // declara vetor
    for(let i=0;i<3;i++){
        let objeto = {
            codigo: Number(prompt(`Informe código`)),
            nome: prompt(`Informe nome`),
            endereco: prompt(`Informe endereço`),
        }
        // verifica se o código já existe
        let achou = false // ainda nÃ£o encontramos farmácia com o código
        for(let j=0;j<farmacias.length;j++){
            if (objeto.codigo == farmacias[j].codigo){
                achou = true // encontrei
                break // para de procurar
            }
        }
        if (!achou) {  // não achou
            farmacias.push(objeto) // insere no vetor
        }
        else {
            alert(`Já existe farmácia com este código. Tente novamente`)
            i-- // não conta a tentativa com falha
        }
    }
}
function criaRem(){
    let remedios = []
    for(let i=0;i<3; i++){
        let objeto = {
            codigoFarmacia: Number(prompt(`código da farmácia`)),
            nome: prompt('Nome do remédio'),
            qtde: Number(prompt('Qtde do remédio')),
            preco: Number(prompt('Preço do remédio'))
        }
        // procura se a farmácia existe
        let achou = false
        for(let j=0; j<farmacias.length;j++){
            if (objeto.codigoFarmacia == farmacias[j].codigo){
                achou = true
                break
            }
        }
        if (achou){
            remedios.push(objeto)
        }
        else {
            alert('Farmácia não existe')
            i--
        }
        
    }
}
function compra(){
    for(let i=0;i<3;i++){
        let compra = {
            codigoFarmacia: Number(prompt(`Código da farmácia para compra`)),
            nome: prompt('Nome do remédio para compra' ),
            qtde: Number(prompt('Qtde do remédio para compra')),
        }
        // verifica se o remédio existe
        let achou = false
        for(let j=0;j<remedios.length;j++){
            if ((compra.codigoFarmacia == remedios[j].codigoFarmacia) && 
                (compra.nome == remedios[j].nome)){ // remédio e farmácia OK
                  if (compra.qtde <= remedios[j].qtde){ // estoque suficiente
                        remedios[j].qtde = remedios[j].qtde - compra.qtde
                        alert('Compra com sucesso')
                        achou = true
                        break
                  }      
                  else {
                    alert('Estoque insuficiente')
                    i--
                  }
            }
        }    
        if (!achou){
            alert('remédio ou farmácia não existe')
            i--
        }   
    }

}