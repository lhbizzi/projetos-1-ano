function Calcular(){
    let saldo = Number(document.getElementById("saldo").value)
    let credito
    if(saldo <= 200){
        credito = saldo + (saldo * 0.1) 
    }
    else if((saldo > 200) && (saldo <= 300)){
        credito = saldo + (saldo * 0.2)
    }
    else if((saldo > 300) && (saldo <= 400)){
        credito = saldo + (saldo * 0.25)
    }
    else if(saldo > 400){
        credito = saldo + (saldo * 0.3)
    }
    document.getElementById("Resp").innerHTML = "O valor do crédito é: " + credito + " e o valor do saldo é: " + saldo
}