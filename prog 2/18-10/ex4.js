function principal(){
    let i,j,med,somaclas,medclas
    let mat = []
    let aluno = []
    somaclas = 0
    for(i=0;i<15;i++){
        mat[i]=[]
        aluno[i] = prompt("Digite o Nome do aluno")
        for(j=0;j<5;j++){
            mat[i][j]=Number(prompt(`Digite a nota do aluno ${aluno[i]} para a prova ${j+1}`))
        }
    }
    for(i=0;i<15;i++){
        soma =0
        for(j=0;j<5;j++){
            soma = soma + mat[i][j]
            somaclas = somaclas + mat[i][j]
        }
        med = soma/5
        if (med>6){
            console.log(`A media do aluno ${aluno[i]} é ${med}, Aprovado\n`)
        }
        if (med<=6 && med>=4){
            console.log(`A media do aluno ${aluno[i]} é ${med}, Exame\n`)
        }
        if(med<4){
            console.log(`A media do aluno ${aluno[i]} é ${med}, Reprovado\n`)
        }
        
    }
    medclas = somaclas/75
    console.log(`A media da sala é ${medclas}\n`);
}