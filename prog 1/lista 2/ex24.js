function Calcular(){
    let preco = Number(document.getElementById(`preco`).value)
    let categoria = Number(document.getElementById(`categoria`).value)
    let situacao = Number(document.getElementById(`situacao`).value)
    let percentual
    let imposto 
    let classificacao

    if(preco <= 25){ //aumento do preço
        if(categoria = 1){
            percentual = preco + (preco * 0.05)
        }
        else if(categoria = 2){
            percentual = preco + (preco * 0.08)
        }
        else if(categoria = 3){
            percentual = preco + (preco *0.1)
        }
        else{
            document.getElementById(`Resp`).innerHTML = `categoria inválida`
            return 0 //encerra o programa
        }
    }
    else if(preco > 25){
        if(categoria = 1){
            percentual = preco + (preco * 0.12)
        }
        else if(categoria = 2){
            percentual = preco + (preco * 0.15)
        }
        else if(categoria = 3){
            percentual = preco + (preco *0.18)
        }
        else{
            document.getElementById(`Resp`).innerHTML = `categoria inválida`
            return 0 //encerra o programa
        }
    }
    else{
        document.getElementById(`Resp`).innerHTML = `preços inválidos`
    }
    if(situacao == `R` || categoria == 2){ //situação
        imposto = percentual + (preco * 0.05)  
    }
    else{
        imposto = percentual + (preco * 0.08)
    }
    if(imposto <= 50){
        classificacao = `Barato`
    }
    else if((imposto >50) && (imposto < 120)){
        classificacao = `Normal`
    }
    else if(imposto >= 120){
        classificacao = `Caro`
    }
    else{
        document.getElementById(`Resp`).innerHTML = `novo preço inválido`
        return 0 //finaliza o programa
    }

    document.getElementById(`Resp`).innerHTML = `O novo preço é ${imposto}, e o preço está ${classificacao}`
}