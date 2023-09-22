function Calcular(){
    let nmr1 = (document.getElementById("nmr1").value);
    let nmr2 = (document.getElementById("nmr2").value);
    let resultado
    if(nmr1 > nmr2){
        resultado = nmr2
    }
    else if(nmr2 > nmr1){
        resultado = nmr1
    }
    else{
        resultado = "Insira os valores!"
    }
    document.getElementById("Resp").innerHTML = resultado + " é o menor número."
}