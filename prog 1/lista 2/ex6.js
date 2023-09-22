function Calcular(){
    let nmr1 = Number(document.getElementById("nmr1").value)
    let nmr2 = Number(document.getElementById("nmr2").value)
    let opcao = Number(document.getElementById("opcao").value)
    let resultado
    switch(opcao){
        case 1: resultado = Math.pow(nmr1, nmr2)
            break
        case 2: resultado = Math.sqrt(nmr1) + " e " + Math.sqrt(nmr2)
            break
        case 3: resultado = Math.cbrt(nmr1) + " e " + Math.cbrt(nmr2)
        default: "nenhuma opção selecionada"
    }
    document.getElementById("Resp").innerHTML = resultado
}