function principal(){
    alertar() //sem parâmetro
    alertar2(`Bom dia`)//com parâmetro
    alertar2(`Boa tarde`)//com parâmetro
    alertar2(`Boa noite`)//com parâmetro
    criarLog()//sem parâmetro
    //let x = soma(6,9)
    alertar2(`A soma é igual a: ${soma(6,9)}`)
}
function alertar(){//não retornou nada
    alert(`Bom dia`)
    alert(`Boa tarde`)
    alert(`Boa noite`)
}
function alertar2(texto){//não retorna nada - recebe parâmetro
    alert(texto)
}
function criarLog(){//não retornou nada
    console.log(`Bom dia`)
    console.log(`Boa tarde`)
    console.log(`Boa noite`)
}
function soma(a,b){
    c = a + b
    return c 
}