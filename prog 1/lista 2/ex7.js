function Calcular(){
    let salario = Number(document.getElementById("salario").value)
    let ajuste 
    if(salario <= 500){
        ajuste = 500 + (500 * 0.3)
        document.getElementById("Resp").innerHTML = "O novo salário é: " + ajuste  
    }
    else{
        ajuste = "O funcionário não tem direito de receber aumento!"
        document.getElementById("Resp").innerHTML = ajuste
    }
     
}