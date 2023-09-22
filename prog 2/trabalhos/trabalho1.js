function trabalho1(){
    let votacao = []
    let VotoMaior = 0
    let win
    let partWin
    let votWin
    for(let i=0; i<10; i++){
       let candidato = {
            nome: prompt(`Informe o nome do candidato: `),
            partido: prompt(`Informe o partido do candidato: `),
            votos: Number(prompt(`Informe a quantidade de votos: `))         
        }
        votacao.push(candidato);
    }
    for(let i=0; i<votacao.length; i++){
        if(votacao[i].votos > VotoMaior){
            VotoMaior = votacao[i].votos
            win = votacao[i].nome
            partWin = votacao[i].partido
            votWin = votacao[i].votos
        }
    }
    console.log(`O vencedor foi o candidato: ${win}, do partido ${partWin}, com ${votWin} votos.`);
}

function correção(){
    let votacao = []
    // leitura dos dados
    for(let i=0;i<6;i++){
        let objeto = {
            nome: prompt(`Informe nome do candidato`),
            partido: prompt(`Informe partido do candidato`),
            qtde: Number(prompt(`Informe qtde de votos`))
        }
        while (objeto.qtde < 0) {
            objeto.qtde = Number(prompt(`Informe qtde de votos positiva`))
        }
        votacao.push(objeto)
    }
    // processamento
    // o mais votado Ã© o primeiro candidato
    // em caso de empate
    let maisVotado = [] // mais Votado é um vetor
    maisVotado[0] = votacao[0]
    for(let i=1;i<votacao.length;i++){
        if (votacao[i].qtde > maisVotado[0].qtde){
            maisVotado[0] = votacao[i]
            if (maisVotado.length > 1){
                maisVotado = []
                maisVotado[0] = votacao[i]
            }
        }
        else if (votacao[i].qtde == maisVotado[0].qtde){
            maisVotado.push(votacao[i])
        }
    }
}