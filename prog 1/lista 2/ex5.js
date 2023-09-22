function Calcular(){
        let nmr1 = Number(document.getElementById("nmr1").value)
        let nmr2 = Number(document.getElementById("nmr2").value)
        let opcao = Number(document.getElementById("opcao").value)
        let resultado
         
        switch(opcao){
                case 1: resultado = (nmr1 + nmr2) / 2
                        break 
                case 2: if(nmr1 >= nmr2){
                         resultado = nmr1 - nmr2
                        }
                        else{
                         resultado = nmr2 - nmr1
                        }                       
                         break
                case 3: resultado = nmr1 * nmr2  
                         break
                case 4: if(nmr2 != 0){
                        resultado = nmr1 / nmr2 
                        } 
                        else{
                                resultado = "Divisão por zero"
                        }
                         break
                default: resultado = "nenhuma operação selecionada"  
        }
        document.getElementById("resp").innerHTML = resultado
}