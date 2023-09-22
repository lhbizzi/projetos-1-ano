function Calcular(){
//template string -> funcionaludade do Java Srcipt
let anoAtual = 2022     
let anoNascimento = 2003
let idade = anoAtual - anoNascimento
//modelo com string
document.getElementById("resp").innerHTML = `nasci em ${anoNascimento} e tenho ${idade} anos`
}