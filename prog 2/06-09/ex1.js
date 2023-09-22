function principal1(){
    let N = 10
    let result = somaInt(N)
    alert(`A soma é: ${result}`)
}
function somaInt(N){
    let soma = 0
    for(let i=1; i<=N; i++){
        soma+=i
    }
    return soma
}