function principal(){
    let vetorAlbum = []
    let vetorFigurinha = []
    let opcao
        do{
            opcao = Number(prompt('escolha uma opcao \n 1- cadastrar o album \n 2- cadastrar as figurinhas \n 3- comprar uma figurinha \n 4- trocar figurinha \n 5- mostrar figurinhas que tem pra troca \n 6- mostrar figurinhas com quantidade igual a 0 \n 7- mostrar quantas figurinhas faltam para preencher o album \n 8- sair'))
            switch(opcao){
                case 1 : cadastrarAlbum(vetorAlbum)
                        break
                case 2 : cadastrarFigurinha(vetorFigurinha , vetorAlbum)
                        break
                case 3 : comprarFigurinha(vetorFigurinha)
                        break
                case 4 : trocarFigurinha(vetorFigurinha )
                        break
                case 5 : MostrarFigurinha(vetorFigurinha )
                        break
                case 6 : MostrarFigurinhaZerado(vetorFigurinha)
                        break
                case 7 : FigurinhaRestante(vetorFigurinha , vetorAlbum)
                        break
                case 8: console.log('Obrigado')
                        break
                default: alert('Opção inválida')

            }
        }   
        while(opcao != 8 )
}

function cadastrarAlbum(vetorAlbum){
    let album = {
        id: Number(prompt(`Informe id do album`)),
        nomeAlbum: prompt(`Informe nome do album`),
        empresa:prompt(`Informe a empresa do album`),
        qtdCompletar: Number(prompt(`Informe a quantidade de figurinhas para completar o album`)),
    }
    let achou = false
   
    for(let i=0 ; i<vetorAlbum.length; i++){
        if(vetorAlbum[i].id == album.id ){
        achou=true
        break
        }
    }
    if(!achou){
        vetorAlbum.push(album)
        alert('album inserido')
    }else{
        alert('album ja existe')
    }

}

function cadastrarFigurinha(vetorFigurinha , vetorAlbum){
    let figurinha= {
        idAlbum: Number(prompt(`Informe id do album`)),
        nomeFigurinha: prompt(`Informe nome da figurinha`),
        time:prompt(`Informe o time da figurinha`),
        qtde : 0,
        idFigurinha: Number(prompt(`Informe id da figurinha`)),
    }
    let achou = false
   
    for(let i=0 ; i<vetorFigurinha.length; i++){
        if(vetorFigurinha[i].idFigurinha == figurinha.idFigurinha){
        achou=true
        break
        }
    }
    if(!achou){
        for(let i=0 ; i<vetorAlbum.length; i++){
            if(vetorAlbum[i].id == figurinha.idAlbum){
                achou=true
                break
                }
        }
        if(achou){
            vetorFigurinha.push(figurinha)
             alert('figurinha inserida')
        }else{
            alert('album inexistente')
        }
    }else{
        alert(' figurinha ja existente')
    }
    console.log(figurinha)
    
}

function comprarFigurinha(vetorFigurinha){
    let compra =Number(prompt('insira o id da figurinha para comprar'))
       
    for(let i=0 ; i<vetorFigurinha.length; i++){
       if( vetorFigurinha[i].qtde >= 0){
        vetorFigurinha[i].qtde =  vetorFigurinha[i].qtde + 1
        alert('compra efetuada')
       }
       else{
        alert('nao temos a figurinha')
       }
    }
    
}

function trocarFigurinha(vetorFigurinha){
    let troca = {
        pegar: Number(prompt(`figurinha que voce quer`)),
        trocar: prompt('figurinha que quer trocar' ),
    }
    for(let j=0;j<vetorFigurinha.length;j++){
        if ((troca.pegar == vetorFigurinha[j].idFigurinha) && (troca.trocar == vetorFigurinha[j].idFigurinha)){ 
              if (troca.pegar <= vetorFigurinha[j].qtde){ 
                vetorFigurinha[j].qtde = vetorFigurinha[j].qtde - troca.trocar
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
  
    
    


function MostrarFigurinha(vetorFigurinha){
   
   for(let i=0 ; i<vetorFigurinha.length; i++){
        if(vetorFigurinha[i].qtde > 0){
            alert(vetorFigurinha[i].nomeFigurinha)
        }
        else{
            alert('nao existem figurinhas para troca')
        }
    }
}


function MostrarFigurinhaZerado(vetorFigurinha){
    for(let i=0 ; i<vetorFigurinha.length; i++){
        if(  vetorFigurinha[i].qtde == 0){
            alert(vetorFigurinha[i].nomeFigurinha)
        }
        else{
            alert('nao existem figurinhas zeradas')
        }
    }
    
}

function FigurinhaRestante(vetorFigurinha , vetorAlbum){
    let idAlbum = Number(prompt('insira o id do album'))
    for(let i=0 ; i<vetorAlbum.length; i++){
        if(idAlbum == vetorAlbum[i].id){
            let faltam = vetorAlbum[i].qtdCompletar - vetorFigurinha[i].qtde
            alert(faltam)
        }
        else{
            alert('id do album errado')
        }
    }
    
}

principal()