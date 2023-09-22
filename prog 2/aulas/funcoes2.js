function usandoVetores(){
    let vetor = [10, 20, 30]
    dividePorDois(vetor)
    console.log(vetor)
}
function dividePorDois(vetor){
    for(let i=0; i<3; i++){
        vetor[i] = vetor[i] / 2
    }
}