function Calcular(){
    let preco = Number(document.getElementById("preco").value)
    let resposta
    let novo
    if(preco > 0){
        if(preco < 50){
            resposta = preco + (preco * 0.05)
        }
        else if((preco >= 50) && (preco <= 100)){
            resposta = preco + (preco * 0.1)
        }
        else if(preco > 100){
            resposta = preco + (preco * 0.15)
        }
    else{
        resposta = "preço não compatível"
    }   
    }
    
    if((aj5 < 80) && (aj10 < 80) && (aj15 < 80)){
        novo = "O preço está barato"
    }
    else if((aj5 >= 80 && aj5 <= 120) && (aj10 >= 80 && aj10 <= 120) && (aj15 >= 80 && aj15 <= 120)){
        novo = "O preço está normal"
    }
    else if((aj5 > 120 && aj5 <= 200) && (aj10 > 120 && aj10 <= 200) && (aj15 > 120 && aj15 <= 200)){
        novo = "O preço está caro"
    }
    else if((aj5 > 200) && (aj10 > 200) && (aj15 > 200)){
        novo = "O preço está muito caro"
    }
    document.getElementById("Resp").innerHTML = resposta + ".\n " + novo + "."
}