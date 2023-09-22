function ex1(){
    let nota1
    let nota2
    let nota3
    let nota4
    let media
    let ordem
    let total
    let soma
    
    ordem = 1
    soma = 0
    while(ordem <= 5){
        nota1 = Number(prompt(`Informe a nota 1 do aluno ${ordem}:`))
        nota2 = Number(prompt(`Informe a nota 2 do aluno ${ordem}:`))
        nota3 = Number(prompt(`Informe a nota 3 do aluno ${ordem}:`))
        nota4 = Number(prompt(`Informe a nota 4 do aluno ${ordem}:`))
        media = (nota1 + nota2 + nota3 + nota4) / 4
        alert(`A média do aluno ${ordem} é: ${media}`)
        soma = soma + media
        ordem++
        total = soma / 5
    }
     alert(`A média total é: ${total}`)
}

function ex2(){
    let peso
    let pesoP = 0
    let pesoL = 1000000
    let atleta = 1

    while(atleta <= 10){
        peso = Number(prompt(`Informe o peso do atleta ${atleta}:`))
        atleta++
        if(peso > pesoP){
            pesoP = peso
        }
        else{
            pesoP = pesoP
        }
        if(peso < pesoL){
            pesoL = peso
        }
        else{
            pesoL = pesoL
        }
    }
    alert(`O peso menor é igual a ${pesoL} e o maior é igual a ${pesoP}`)
}

function ex3(){
        let nota1
        let nota2
        let nota3
        let nota4
        let media
        let ordem
        let total
        let soma
        let qntd = Number(prompt(`Informe o número de alunos`))

        ordem = 1
        soma = 0
        while(ordem <= qntd){
            nota1 = Number(prompt(`Informe a nota 1 do aluno ${ordem}:`))
            nota2 = Number(prompt(`Informe a nota 2 do aluno ${ordem}:`))
            nota3 = Number(prompt(`Informe a nota 3 do aluno ${ordem}:`))
            nota4 = Number(prompt(`Informe a nota 4 do aluno ${ordem}:`))
            media = (nota1 + nota2 + nota3 + nota4) / 4
            alert(`A média do aluno ${ordem} é: ${media}`)
            soma = soma + media
            ordem++
            total = soma / qntd
        }
         alert(`A média total é: ${total}`)
}