function Calcular(){
    let cont =1 
    let cont2
    let conteudo = ""
    cont = 0
    
    while(cont <= 10){
        cont2 = 1
        while(cont2 <= 10){
            conteudo = conteudo + `<tr><td> ${cont}</td><td> X </td><td>${cont2}</td><td> = </td><td>${cont2 * cont}</td></tr> <br/>`
            cont2++
        }
        conteudo = conteudo + `</br>` + `</br>`
        cont++
    }
    document.getElementById(`resp`).innerHTML = conteudo
}   