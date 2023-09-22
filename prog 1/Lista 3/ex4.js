function Calcular(){
    let nmr = Number(document.getElementById(`nmr`).value)
    let cont
    let tab
    let conteudo = ""
    cont = 0
    
    while(cont <= 10){
            tab = nmr * cont
            conteudo = conteudo + `${nmr} X ${cont} = ${tab}<br/>`
            cont++
    }
    document.getElementById(`resp`).innerHTML = conteudo
}   