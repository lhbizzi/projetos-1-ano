function ex6(){
    let vendas =[]
    let percent = []
    let nomes = []
    let comissão = []
    let result = ""
    let totalvendas
    let valormaior = 0
    let valormenor = 10000000
    let menornome 
    let maiornome
    
    for(i=0; i<2; i++){
        nomes.push(prompt(`Informe o nome do vendedor`))
        vendas.push(Number(prompt(`Informe o valor de vendas do vendedor`)))
        percent.push(Number(prompt(`Informe o percentual de comissão do vendedor`)))
    }
    for(i=0; i<2; i++){
        if(vendas[i] >= 0 && percent[i] >= 0){
            comissão.push(((vendas[i] * (percent[i] / 100))))
        }
    }
    for(i=0; i<2; i++){
        result += ` <br/> ${vendedor[i]} - ${relatorio[i]}`
    }
    for(i=0; i<2; i++){
        if(vendas[i] >= 0 && percent[i] >= 0){
            totalvendas += vendas[i]
        }
    }
    for(i=0; i<2; i++){
        if(vendas[i] >= 0 && percent[i] >= 0){
            if(comissão[i] < valormenor){
                valormenor = comissão[i]
                menornome = nomes[i]            
            }
            if(comissão[i] > valormaior){
                valormaior = comissão[i] 
                maiornome = nomes[i]           
            }
        }
    }
    document.getElementById(`resp`).innerHTML = `Os relatórios são:/n
    -Os vendedores e suas comissões: ${result}/n
    -O total de vendas: ${totalvendas}/n
    -Quem vai receber o maior valor: ${maiornome}/n
    -Quem vai receber o menor valor: ${menornome}`
}