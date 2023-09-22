function Calcular(){
    let opcao
    let salario, aumento, ferias, meses, deciTerc
    do{
        opcao= Number(prompt(`Escolha uma opção: \n1- Novo Salário \n2- Férias \n3- Décimo Terceiro \n 4- Sair`))
        switch(opcao){
            case 1: salario = Number(prompt(`Informe o salário: `))
                    if(salario < 210){
                        aumento = salario + (salario * 0.15)
                    } 
                    else if(salario >= 210 && salario <= 600){
                        aumento = salario + (salario * 0.1)
                    }
                    else if(salario > 600){
                        aumento = salario + (salario * 0.05)
                    }
                    else{
                        alert(`Dados Inválidos!`)
                    }
                    alert(`O valor do salário com o ajuste é: ${aumento}`)
                break
            case 2: salario = Number(prompt(`Informe o salário: `))
                    ferias = salario + (salario / 3)
                    alert(`O valor no salário de suas férias é: ${ferias}`)
                break
            case 3: salario = Number(prompt(`Informe o salário: `))
                    meses = Number(prompt(`Informe o número de meses: `))
                    if(meses <= 12){
                        deciTerc = (salario * meses) / 12
                    }
                    else{
                        alert(`Dados Inválidos!`)
                    }
                    alert(`O valor do Décimo terceiro é : ${deciTerc}`)
                break
            case 4: alert(`Programa Finalizado`)
                break
            default: alert(`Opção Inválida`)
        }
    }
    while(opcao != 4)
}