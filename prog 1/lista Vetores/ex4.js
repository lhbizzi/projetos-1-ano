function ex4(){
    let vetor =[]
    let nmr = []
    let cont = 0

    for(i=0; i<15; i++){
        vetor.push(Number(prompt(`Informe o ${i+1}° número: `)))
    }
    for(i=0; i<15; i++){
        if(vetor[i]==30){
            nmr.push(i+1)
            cont++
        }
    }
    if(cont != 0){
        document.getElementById(`resp`).innerHTML = `As posíções que possuem 30 são: ${nmr}`
    }
    else{
        document.getElementById(`resp`).innerHTML = `Nenhuma posição é igual a 30`
    }
}
