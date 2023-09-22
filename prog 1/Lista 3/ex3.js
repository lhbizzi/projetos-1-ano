function Calcular(){
    let cont = 1
    let faixa1 = 0, faixa2 = 0, faixa3 = 0, faixa4 = 0, faixa5 = 0
    while(cont <= 8){
        let idade = Number(prompt(`Informe a idade ${cont}: `))
        if(idade >= 0 && idade <= 15){
            faixa1++
        }
        else if(idade >= 16 && idade <= 30){
            faixa2++
        }
        else if(idade >= 31 && idade <= 45){
            faixa3++
        }
        else if(idade >= 46 && idade <= 60){
            faixa4++
        }
        else if(idade > 60){
            faixa5++
        }
        else{
            alert(`Idade inválida`)
        }
    cont++
    } 
    document.getElementById(`resp`).innerHTML = `Faixa 1 ${faixa1} <br/> Faixa 2 ${faixa2} <br/> Faixa 3 ${faixa3} <br/> Faixa 4 ${faixa4} <br/> Faixa 5 ${faixa5} <br/>`
}  