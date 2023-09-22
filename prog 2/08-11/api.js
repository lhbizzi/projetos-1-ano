async function teste(){
    let titulo = document.getElementById('IddoCara').value
    let dados = await fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=90727c6c`)
    .then(response => {
        return response.json()
    })
    .catch(erro => {
        console.log(erro)
    })
}