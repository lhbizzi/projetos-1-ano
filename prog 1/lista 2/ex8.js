function calcular(){
    let salario
    let ajuste
    salario = Number (document.getElementById("salario").value);
    

    if (salario <= 300){
        ajuste = salario + (salario *35 /100)
    }
    else if (salario > 300 ) {
        ajuste = salario + (salario *15 /100)
    }
    
      

    document.getElementById("Resp").innerHTML = "O salário ajustado vai ser: " + ajuste
}