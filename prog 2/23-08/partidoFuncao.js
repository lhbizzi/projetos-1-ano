function principal(){
    let vetor = []
    partido(vetor)
    politico(vetor)
    voto(vetor)
}

function partido(){
    let partidos = [], politicos = [], votos = []
    for(let i=0; i<3; i++){
        let partido = {
            nome: prompt(`Informe o nome do partido: `),
            codigo: Number(prompt(`Informe o código do partido: `)),
            sigla: prompt(`Informe a sigla do partido: `),
            presidente: prompt(`Informe o presidente do partido: `),
            nmrPoliticos: Number(prompt(`Informe o número de políticos no partido: `))
        }
        //verifica se possuem códigos iguais
        let achou = false
        for(let j=0; j<partidos.length; j++){
            if(partido.codigo == partidos[j].codigo){
                achou = true
                break
            }
        }
        if(!achou){//não achou
            partidos.push(partido)//insere no vetor
        }
        else{
            alert(`código já cadastrado!`)
            i--//ignora tentativa com erro
        }
    }
}
    //vetor para dados dos políticos
function politico(vetor){
    for(let i=0; i<3; i++){
        let politico = {
            nomePolitico: prompt(`Informe o nome do político: `),
            codigo: Number(prompt(`Informe o código do partido: `)),
            qtde: 0,//inicia com 0
            cargo: prompt(`Informe o cargo do político: `)        }
        //compara para ver se o partido existe
        let achou = false
        for(let j=0; j<partidos.length; j++){
            if(politico.codigo == partidos[j].codigo){
                achou = true
                break
            }
        }
        if(achou){
            politicos.push(politico)
        }
        else{
            alert(`Código de partido não existente!`)
            i--
        }
    }
}
function voto(vetor){
    for(let i=0; i<3; i++){
        let voto = {
            codigo: Number(prompt(`Informe o código do partido: `)),
            nomePolitico: prompt(`Informe o nome do político: `),
            qtde: Number(prompt(`Informe q quantidade de votos: `))
        }
        let achou = false
        for(let j=0; j<politicos.length; j++){
            if(voto.codigo == politicos[j].codigo){
                achou = true
                break
            }
        }
        if(achou){
            votos.push(voto)
        }
        else{
            alert(`Código de candidato não existente!`)
            i--
        }
    }
}
