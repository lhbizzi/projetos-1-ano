function principal(){
    let vet
    let mat = []
    let media
    cadastra(vet, mat)
    mediaEstadio(media)
    maiorNota()
    maiorMedia()
}
function cadastra(vet, mat){
    for(let i=0; i<4; i++){
        vet[i] = prompt(`Informe o nome do estádio ${i+1}`).toLowerCase()
    }
    for(let i=0; i<4; i++){
        mat[i] = vet[i]
        for(let j=0; j<5; j++){
            mat[i][j] = prompt(`Informe a nota do ${i+1}° especialista`)   
        }
    }
}
function mediaEstadio(vet, media, mat){ 
    estadio = prompt(`Informe o estádio que deseja ver a média: `)
    let soma = 0
    for(let i=0; i<4; i++)
    if(estadio == vet[i]){
        a = 0
        for(let j=0; j<5; j++){
            soma += mat[a][j]
            a++
        }
    }
    media = soma/5
    console.log(`A média do estádio é: ${media}`)
}
function maiorNota(vet, mat){
    let mediaEstadio = []
    let total
    let soma = 0
    let a = 0
    let maior
    for(let i=0; i<4; i++){
        for(let j=0; j<5; j++){
            soma = mat[i][j]
        }
        total = soma/4
        mediaEstadio[a] = total
        a++
        soma = 0
    }
    for(let i=0; i<5; i++){
        if(mediaEstadio[i] > -1){
            maior = mediaEstadio[i]
        }
    }
    console.log(`O especialista com maior media de nota é: ${maior}`)
}
function maiorMedia(vet, mat){
    let mediaEspecialista = []
    let total
    let soma = 0
    let a = 0
    let maior
    for(let j=0; j<5; j++){
        for(let i=0; i<4; i++){
            soma = mat[i][j]
        }
        total = soma/4
        mediaEspecialista[a] = total
        a++
        soma = 0
    }
    for(let i=0; i<5; i++){
        if(mediaEspecialista[i] > -1){
            maior = mediaEspecialista[i]
        }
    }
    console.log(`O especialista com maior media de nota é: ${maior}`)
}
principal()