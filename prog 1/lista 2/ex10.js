function Calcular(){
    let fabrica = Number(document.getElementById("fabrica").value)
    let resultado 
    if(fabrica < 12000){
       resultado = fabrica + (fabrica * 0.05) 
    }
    else if((fabrica >= 12000) && (fabrica < 25000)){
        resultado = fabrica + ((fabrica * 0.1) + (fabrica * 0.15))
    }
    else if (fabrica >= 25000){
        resultado = fabrica + ((fabrica * 0.15) + (fabrica + 0.2))
    }
    document.getElementById("Resp").innerHTML = "O preço ao consumidor é: " + resultado
}