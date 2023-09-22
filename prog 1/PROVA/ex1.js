function Calcular(){
    let anos = Number(document.getElementById(`anos`).value) //criando as variáveis do programa 
    let opcao = Number(document.getElementById(`opcao`).value)
    let opcao2 = Number(document.getElementById(`opcao2`).value)
    let salario 
    let bonus
    let total
    let classificacao   

    if(anos < 5){ //switch para saber o salário do profissional
        switch(opcao){
        case 1: salario = 3000
            break
        case 2: salario = 5000
            break
        case 3: salario = 4000
            break 
        default: `nenhuma opção selecionada`
        } 
    }
    else if(anos >= 5){
        switch(opcao){
            case 1: salario = 6000
                break
            case 2: salario = 8000
                break
            case 3: salario = 7000
                break 
            default: `nenhuma opção selecionada`
            } 
    }
    else{
        document.getElementById(`Resp`).innerHTML = `Erro!`
        return 0 //finaliza o programa
    }
    
    if((opcao = 3) || (opcao2 = 5)){ //criando if's para saber qual o valor do bônus a ser recebido e se ele tem direito
        bonus = salario + (salario * 0.3)
    }
    else if(opcao2 = 4){
        bonus = salario + (salario * 0.05)
    }
    else{
        bonus = 0 
    }

    total = salario + bonus //equação do salário total

    if(total < 4500){ //if's para saber o resultado da indicação
        classificacao = "Alta"
    }
    else if((total >= 4500) && (total <= 6000)){
        classificacao = "Média"
    }
    else if(total > 6000){
        classificacao = "Baixa"
    }

    document.getElementById(`Resp`).innerHTML = `O profissional possui uma expectativa ${classificacao} para a vaga!`
}