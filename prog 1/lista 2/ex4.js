function Calcular(){
    let nmr1 = Number(document.getElementById("nmr1").value)
    let nmr2 = Number(document.getElementById("nmr2").value)
    let nmr3 = Number(document.getElementById("nmr3").value)
    let resultado
    if ((nmr1 > nmr2) && (nmr1 > nmr3)){
        resultado = nmr1
    }
    else if((nmr2 > nmr1) && (nmr2 > nmr3)){
        resultado = nmr2
    }
    else{
        resultado = nmr3
    }
    document.getElementById("Resp").innerHTML = "O maior número é: " + resultado
}