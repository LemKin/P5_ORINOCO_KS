function afficherResponse (response) {
    console.log(response);
    return 
}

fetch('http://localhost:3000/api/teddies')
    .then(afficherResponse)
    //response => console.log(response)


//Fetch pour récupérer l'id du produit
fetch('http://localhost:3000/api/teddies/5be9c8541c9d440000665243')
    .then (response => response.json())
    .then (ours => console.log(ours))


