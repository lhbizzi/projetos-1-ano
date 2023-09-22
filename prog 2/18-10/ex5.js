let principal = () => {
    let i,j
    let somaano=0
    let mat = []
    let mes = []
    for(i=0;i<6;i++){
        mat[i]=[]
        mes[i]= prompt(`Digite o nome do mes`)
        for(j=0;j<4;j++){
            mat[i][j]=Number(prompt(`Digite o total vendido no mes ${mes[i]} na semana ${j+1}`))
        }
    }
    for(i=0;i<6;i++){
        let soma =0
        for(j=0;j<4;j++){
            soma = soma + mat[i][j]
            somaano = somaano + mat[i][j]
        }
        console.log(`O total vendido em ${mes[i]} é de ${soma} `)
        
    }
    for(i=0;i<6;i++){
        for(j=0;j<4;j++){
            console.log(`O total vendido na semana ${j+1} de ${mes[i]} é de ${mat[i][j]} `)
        }
        
    }
    console.log(`O total vendido no ano é de ${somaano} `)
}

