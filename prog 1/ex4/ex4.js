function exe4(){
    let vetor = []
    let vetorposicao =[]
    for(let i=0;i<15;i++){
        vetor.push(Number(prompt(`informe o numero`)))
    }
    for(let i=0;i<15;i++){
        if(vetor[i]==30){
            vetorposicao.push(i+1)
        }
        document.getElementById("result").innerHTML=`as posições são ${vetorposicao}`
    }
}

function exe6(){
    let vendedor = []
    let comicao = []
    let vendas = []
    let relatorio = []
    let soma =0
    let maior=0
    let menor=10000000000000000000000000000000000000000000000
    let maiorNome
    let menorNome
    for(let i=0;i<2;i++){
        vendedor.push(prompt(`informe o nome do vendedor`))
        comicao.push(Number(prompt(`a comição em porcentagem`)))
        vendas.push(Number(prompt(`informe quanto o vendedor vendeu este mês`)))
    }
    for(let i=0;i<2;i++){
        if(comicao[i]>=0 && vendas[i]>=0){
            relatorio.push((vendas[i]*(comicao[i]/100)))
        }
    }
    for(let i=0;i<2;i++){
        if(comicao[i]>=0 && vendas[i]>=0){
            soma+=vendas[i]
        }
    }
    for(let i=0;i<2;i++){
        if(maior<relatorio[i]){
            maior=relatorio[i]
            maiorNome = vendedor[i]
        }
        if(menor>relatorio[i]){
            menor = relatorio[i]
            menorNome = vendedor[i]
        }
    }
    let result = ''
    for(let i=0;i<2;i++){
        result += ` <br/> ${vendedor[i]} - ${relatorio[i]}`
    }

    document.getElementById("resulte").innerHTML=` ${result} </br>a soma total é de ${soma}
     </br>o vendedor que mais vendeu foi ${maiorNome} com valor ${maior}
     </br>o vendedor que menos vendeu foi ${menorNome} com valor ${menor}`
}