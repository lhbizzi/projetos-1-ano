function Calcular(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    let media
    let resultado
    media = (nota1 + nota2 + nota3 + nota4) / 4 
    if(media >= 7){
        resultado = "Aprovado"
    }
    else{
        resultado = "Reprovado"
    }
    document.getElementById("Resp").innerHTML = resultado + " com média " + media
}