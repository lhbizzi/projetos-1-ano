function ex9(){
    let name = [], cod = [], price = [], novo = []
    //entrada de dados
    for(let i=0; i<10; i++){
        name.push(prompt(`Informe o nome do ${i+1}° produto: `))
        cod.push(Number(prompt(`Informe o código do ${i+1}° produto: `)))
        price.push(Number(prompt(`Informe o preço do ${i+1}° produto: `)))
    }
    //processamento do preço novo
    for(i=0; i<10; i++){
        if(price[i] > 1000 && cod[i] %2 == 0){//Se preço for superior 1000 e código for par:
            novo.push(price[i] + (price[i] * 0.2)) 
        }
        else if(price[i] > 1000){
            novo.push(price[i] + (price[i] * 0.15))
        }
        else if(cod[i] %2 == 0){
            novo.push(price[i] + (price[i] * 0.1))
        }
    }
    for(i=0; i<10; i++){
        alert(`O nome do ${i+1}° valor é: ${name[i]}\nO código é: ${cod[i]}\nO preço sem ajuste é: ${price[i]}\nO preço ajustado é: ${novo[i]}`)
    }
}