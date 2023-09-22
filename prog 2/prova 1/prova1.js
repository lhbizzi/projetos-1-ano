function principal(){
    let vetAlbum = []
    let vetFig = []
    let opcao
        do{
            opcao = Number(prompt('escolha uma opcao \n 1- cadastrar o album \n 2- cadastrar as figurinhas \n 3- comprar uma figurinha \n 4- trocar figurinha \n 5- mostrar figurinhas que tem pra troca \n 6- mostrar figurinhas com quantidade igual a 0 \n 7- mostrar quantas figurinhas faltam para preencher o album \n 8- sair'))
            switch(opcao){
                case 1 : cadastrarAlbum(vetAlbum)
                        break
                case 2 : cadastrarFigurinha(vetFig , vetAlbum)
                        break
                case 3 : comprarFigurinha(vetFig)
                        break
                case 4 : trocarFigurinha(vetFig )
                        break
                case 5 : MostrarFigurinha(vetFig )
                        break
                case 6 : MostrarFigurinhaZerado(vetFig)
                        break
                case 7 : FigurinhaRestante(vetFig , vetAlbum)
                        break
                case 8: console.log('Obrigado')
                        break
                default: alert('Opção inválida')

            }
        }   
        while(opcao != 8 )
}

function cadastrarAlbum(vetAlbum){
    let album = {
        id: Number(prompt(`Informe id do album`)),
        nomeAlbum: prompt(`Informe nome do album`),
        empresa:prompt(`Informe a empresa do album`),
        qtdCompletar: Number(prompt(`Informe a quantidade de figurinhas para completar o album`)),
    }
    let achou = false
   
    for(let i=0 ; i<vetAlbum.length; i++){
        if(vetAlbum[i].id == album.id ){
        achou=true
        break
        }
    }
    if(!achou){
        vetAlbum.push(album)
        alert('album inserido')
    }else{
        alert('album ja existe')
    }

}

function cadastrarFigurinha(vetFig , vetAlbum){
    let figurinha= {
        idAlbum: Number(prompt(`Informe id do album`)),
        nomeFigurinha: prompt(`Informe nome da figurinha`),
        time:prompt(`Informe o time da figurinha`),
        qtde : 0,
        idFigurinha: Number(prompt(`Informe id da figurinha`)),
    }
    let achou = false
   
    for(let i=0 ; i<vetFig.length; i++){
        if(vetFig[i].idFigurinha == figurinha.idFigurinha){
        achou=true
        break
        }
    }
    if(!achou){
        for(let i=0 ; i<vetAlbum.length; i++){
            if(vetAlbum[i].id == figurinha.idAlbum){
                achou=true
                break
                }
        }
        if(achou){
            vetFig.push(figurinha)
             alert('figurinha inserida')
        }else{
            alert('album inexistente')
        }
    }else{
        alert(' figurinha ja existente')
    }
    console.log(figurinha)
    
}

function comprarFigurinha(vetFig){
    let compra =Number(prompt('insira o id da figurinha para comprar'))
       
    for(let i=0 ; i<vetFig.length; i++){
       if( vetFig[i].qtde >= 0){
        vetFig[i].qtde =  vetFig[i].qtde + 1
        alert('compra efetuada')
       }
       else{
        alert('nao temos a figurinha')
       }
    }
    
}

function trocarFigurinha(vetFig){
    let troca = {
        pegar: Number(prompt(`figurinha que voce quer`)),
        trocar: prompt('figurinha que quer trocar' ),
    }
    for(let j=0;j<vetFig.length;j++){
        if ((troca.pegar == vetFig[j].idFigurinha) && (troca.trocar == vetFig[j].idFigurinha)){ 
              if (troca.pegar <= vetFig[j].qtde){ 
                vetFig[j].qtde = vetFig[j].qtde - troca.trocar
                    alert('troca realizada com sucesso')
                    achou = true
                    break
              }      
              else {
                alert('figurinha insuficiente')
                i--
              }
        }
    }    
    if (!achou){
        alert('figurinha n existe')
        i--
    }   
  }
  
    
    


function MostrarFigurinha(vetFig){
   
   for(let i=0 ; i<vetFig.length; i++){
        if(vetFig[i].qtde > 0){
            alert(vetFig[i].nomeFigurinha)
        }
        else{
            alert('nao existem figurinhas para troca')
        }
    }
}


function MostrarFigurinhaZerado(vetFig){
    for(let i=0 ; i<vetFig.length; i++){
        if(  vetFig[i].qtde == 0){
            alert(vetFig[i].nomeFigurinha)
        }
        else{
            alert('nao existem figurinhas zeradas')
        }
    }
    
}

function FigurinhaRestante(vetFig , vetAlbum){
    let idAlbum = Number(prompt('insira o id do album'))
    for(let i=0 ; i<vetAlbum.length; i++){
        if(idAlbum == vetAlbum[i].id){
            let faltam = vetAlbum[i].qtdCompletar - vetFig[i].qtde
            alert(faltam)
        }
        else{
            alert('id do album errado')
        }
    }
    
}

principal()