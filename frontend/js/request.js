/*
function afficherResponse (response) {
    console.log(response);
    return 
}

fetch('http://localhost:3000/api/teddies')
    .then(afficherResponse)




//Fetch pour récupérer l'id du produit
function donnees (response) {
    console.log(response);
}
fetch('http://localhost:3000/api/teddies/5be9c8541c9d440000665243')
    .then (response => response.json())
    .then (ours => console.log(ours))
    */

const request = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}
