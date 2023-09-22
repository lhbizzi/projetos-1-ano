function principal2(){
    let result = converte()
    alert(`O resultado convertido em segundos é: ${result}`)
}
function converte(){
    let horas = Number(prompt(`Informe o valor das horas: `))
    let minutos = Number(prompt(`Informe o valor dos minutos: `))
    let segundos = Number(prompt(`Informe os segundos: `))
    let sHrs = horas*3600
    let sMin = minutos*60
    let sTot = segundos + sHrs + sMin
    return sTot
}