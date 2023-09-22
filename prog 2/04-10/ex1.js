function principal(){
    let nmrs = [], cont = 0
    cadastraNmrs(nmrs, cont)
    comparaNmrs(nmrs, cont)
}

function cadastraNmrs(nmrs, cont){  
    for(let i=0; i<3; i++){
        nmrs[i] = []
        for(j=0; j<5; j++){
            nmrs[i][j] = Number(prompt(`Informe um número: `))
        }
    }
}

function comparaNmrs(nmrs, cont){
    for(let i=0; i<3; i++){
        for(j=0; j<5; j++){
            if ((nmrs[i][j]>= 15) && (nmrs[i][j] <= 20)){
                cont++
            }
        }
    }
    alert(`A quantidade de números entre 15 e 20 é: ${cont}`)   
}
principal()