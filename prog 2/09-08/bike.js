function bike(){
        let bike = [], preços = 0, antigo = [], caloi = 0, arosVnove = 0, quadros = [], media
        for(let i=0; i<2; i++){
            let bicicletas = {
                marca: prompt(`Informe a marca da bike: `).toLowerCase(),
                modelo: prompt(`Informe o modelo da bike: `).toLowerCase(),
                quadro: Number(prompt(`Informe o tamanho do quadro da bike: `)),
                aro: Number(prompt(`Informe o tamanho do aro: `)),
                ano: Number(prompt(`Informe o ano da bike: `)),
                preço: Number(prompt(`Informe o preço da bike: `))
            }
            bike.push(bicicletas)
        }

        antigo[0]=bike[0]
        quadros[0]=bike[0]
        for(let i=0; i<bike.length; i++){
            //cálculo da soma dos preços
            preços += bike[i].preço
            //análise para descobrimento do modelo mais antigo
            if(bike[i].ano < antigo[i].ano){
                antigo[0] = bike[i]
                if(antigo.length > 1){
                    antigo = []
                    antigo[0] = bike[i]
                }
            }
            else if(bike[i].ano == antigo[i].ano){
                antigo.push(bike[i].ano)
            }
            //descobrimento da quantidade de calois
            if(bike[i].marca == "caloi"){
                caloi++
            }
            //cálculo do número de bikes 29
            if(bike[i].aro == 29){
                arosVnove++
            }
            //bike com maior quadro
            if(bike[i].quadro > quadros[0]){
                quadros[0] = bike[i]
                if(antigo.length > 1){
                    quadros = []
                    quadros[0] = bike[i]
                }
            }
            else if(bike[i].quadro == quadros[0]){
                quadros = 0
                quadros[0] = bike[i]
            }
        }
        media = preços / bike.length
        console.log(`A média dos preços é: ${media}\nA bike mais antiga é a ${antigo[0].modelo}\nA quantidade de bikes Caloi é: ${caloi}\nA quantidade de bikes Aro 29 é: ${arosVnove}\nA bike com maior quadro é: ${quadros[0].modelo}`)
}