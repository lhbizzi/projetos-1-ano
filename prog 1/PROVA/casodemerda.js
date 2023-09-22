function Calcular(){
    let anos = Number(document.getElementById(`anos`).value) //criando as variáveis do programa 
    let opcao = Number(document.getElementById(`opcao`).value)
    let opcao2 = Number(document.getElementById(`opcao2`).value)
    let salario
    let bonus
    let total
    let indicacao

    total = salario + bonus //equação do salário total

    if(anos < 5){ //definição de um if para as opções conforme a tabela
        if(opcao == 1){
            salario = 3000
        }
        else if(opcao == 2){
            salario = 5000
        }
        else if(opcao == 3){
            salario = 4000
        }
        else{
            document.getElementById(`Resp`).innerHTML = `Valores inválidos`
            return 0 //finaliza o programa
        }
    }
    else if(anos >= 5){ //definição de um if para as opções conforme a tabela
        if(opcao == 1){
            salario = 6000
        }
        else if(opcao == 2){
            salario = 8000
        }
        else if(opcao == 3){
            salario = 7000
        }
        else{
            document.getElementById(`Resp`).innerHTML = `Valores inválidos`
            return 0 //finaliza o programa
        }
    }
    else{
        document.getElementById(`Resp`).innerHTML = `Valores Inválidos`
        return 0
    }

    if(opcao == 3 || opcao2 == b){ //criando if's para saber qual o valor do bônus a ser recebido e se ele tem direito
        bonus = salario + (salario * 0.3)
    }
    else if(opcao2 == a){
        bonus = salario + (salario * 0.05)
    }
    else{
        bonus = 0 
    }

    if(total < 4500){ //if's para saber o resultado da indicação
        indicacao = `Alta`
    }
    else if((total >= 4500) && (total <= 6000)){
        indicacao = `Média`
    }
    else if(total > 6000){
        indicacao = `Baixa`
    }
    else{
        document.getElementById(`Resp`).innerHTML = `Valores Inválidos`
        return 0
    }
    document.getElementById(`Resp`).innerHTML = `O profissional possui uma expectativa ${indicacao} para a vaga!`
}