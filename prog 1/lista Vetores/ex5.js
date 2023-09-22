function ex5(){
    let log = [], ling = [], duas = []

    for(let i=0; i<15; i++){//Informa as matrículas dos alunos de Lógica e Linguagem de Programação
        log.push(Number(prompt(`Informe o nome do aluno da matéria de Lógica e Linguagem de Programção: `)))
    }
    for(let i=0; i<10; i++){//Informa as matrículas dos alunos de Linguagem de Programação
        ling.push(Number(prompt(`Informe o nome do aluno da matéria de Linguagem de Programção: `)))
    }
    for(let i=0; i<15; i++){//Compara as matrículas para saber quem faz o mesmo curso simultaneamente
        for(let a=0; a<10; a++){
            if(log[i] == ling[a]){
                duas.push(ling[a])
            }
        }
    }
    alert(`As matrículas dos alunos que fazem o mesmo curso é: ${duas}`)
}