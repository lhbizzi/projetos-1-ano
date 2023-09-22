function exe1(){
    let geral = []
    let pares = []
    let ímpares = []

    for(let i=0; i<6; i++){
        vetor.push(Number(prompt("Informe seu número")))
    }
    //Verificar se é par ou ímpar
    for(let i=0; i<6; i++){
        if(vetor[i] % 2 == 0){
            pares.push[vetor[i]]
        }
        else{
            ímpares.push[vetor[i]]
        }
    }
    document.getElementById("exe1").innerHTML = `Pares ${pares} Qtde de pares: ${pares.length}
    </br>`
}