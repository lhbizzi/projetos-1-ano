function principal() {
    let candidatos = []
    cadastra(candidatos)
    qtde(candidatos)
}

function cadastra(candidatos) {
    for (let i = 0; i < 3; i++) {
        let candidato = {
            nome: prompt(`Informe o nome do candidato: `),
            partido: prompt(`Informe o seu partido: `).toUpperCase(),
            CPF: Number(prompt(`Informe o CPF do candidato: `)),
            qtdeVotos: Number(prompt(`Informe a quantidade de votos do candidato: `))
        }
        candidatos.push(candidato)
    }
}

function qtde(candidatos) {
    // candidatos.forEach((candidato) => {
    //     if(candidatos.partido == 'PX' && candidatos.qtdeVotos > 100){
    //         console.log(candidato)
    //     }
    // })
    console.log("teste")
}

principal()