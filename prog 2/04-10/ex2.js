function principal(){
    let nmrs = [], cont = 0, pares = 0
    cadastraNmrs(nmrs, cont, pares)
    comparaNmrs(nmrs, cont, pares)
    qntdPares(nmrs, cont, pares)
}

function cadastraNmrs(nmrs, cont, pares){  
    for(let i=0; i<2; i++){
        nmrs[i] = []
        for(j=0; j<4; j++){
            nmrs[i][j] = Number(prompt(`Informe um número: `))
        }
    }
}

function comparaNmrs(nmrs, cont, pares){
    for(let i=0; i<2; i++){
        for(j=0; j<4; j++){
            if ((nmrs[i][j]>= 12) && (nmrs[i][j] <= 20)){
                cont++
            }
        }
    }
    alert(`A quantidade de números entre 12 e 20 é: ${cont}`)   
}

function qntdPares(nmrs, cont, pares){
    for(let i=0; i<2; i++){
        for(j=0; j<4; j++){
            if (nmrs[i][j] %2 == 0){
                pares++
            }
        }
    }
    alert(`A quantidade de números pares é: ${pares}`) 
}
principal()