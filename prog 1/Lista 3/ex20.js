function Calcular(){
    let opcao
    let nota1, nota2, nota3
    let peso1, peso2, peso3
    let mediaA, mediaP

    do{
        opcao = Number(prompt(`Escolha a operação: \n1- Média Aritmética \n2- Média Ponderada \n3- Sair`))
        switch(opcao){
            case 1: nota1 = Number(prompt(`Informe a nota 1: `))
                    nota2 = Number(prompt(`Informe a nota 2: `))
                     mediaA = (nota1 + nota2) / 2
                    alert(`A Média Aritmética é : ${mediaA}`)
                break
            case 2: nota1 = Number(prompt(`Informe a nota 1: `))
                    nota2 = Number(prompt(`Informe a nota 2: `))
                    nota3 = Number(prompt(`Informe a nota 3: `))
                    peso1 = Number(prompt(`Informe o peso da nota 1: `))
                    peso2 = Number(prompt(`Informe o peso da nota 2: `))
                    peso3 = Number(prompt(`Informe o peso da nota 3: `))
                    mediaP = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)
                    alert(`O valor da Média Ponderada é: ${mediaP}`)
                break
            case 3: alert(`Programa Finalizado!`)
                break
            default: alert(`Opção Inválida`)
        }
    }
    while(opcao != 3)
}