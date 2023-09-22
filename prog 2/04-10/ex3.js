function principal(){
    let nmrs = [], maior, menor
    cadastraNmrs(nmrs, maior, menor)
    nmrMaior(nmrs, maior, menor)
    nmrMenor(nmrs, maior, menor)
}

function cadastraNmrs(nmrs, maior, menor){  
    for(let i=0; i<6; i++){
        nmrs[i] = []
        for(j=0; j<3; j++){
            nmrs[i][j] = Number(prompt(`Informe um número: `))
        }
    }
}

function nmrMaior(nmrs, maior, menor){
    let linhaM = 0, colunaM = 0
    maior = nmrs[0][0]
    for(let i=0; i<6; i++){
        for(j=0; j<3; j++){
            if(nmrs[i][j] > maior){
                maior = nmrs[i][j]
                linhaM = i
                colunaM = j
            }
        }
    }
    alert(`O maior número é: ${maior}, e está localizado na linha ${linhaM+1} e na coluna ${colunaM+1}`)
}
function nmrMenor(nmrs, maior, menor){
    let linhaMe = 0, colunaMe = 0
    menor = nmrs[0][0]
    for(let i=0; i<6; i++){
        for(j=0; j<3; j++){
            if(nmrs[i][j] > maior){
                maior = nmrs[i][j]
                linhaMe = i
                colunaMe = j
            }
        }
    }
    alert(`O menor número é: ${menor}, e está localizado na linha ${linhaMe+1} e na coluna ${colunaMe+1}`)
}
principal()