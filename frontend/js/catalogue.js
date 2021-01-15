const afficherOurs = () => {
    let data = request("http://localhost:3000/api/teddies/")
    data.then((produits) => {
        produits.forEach(produit => {
            afficherLesProduits(produit);
        });
    })
}

afficherOurs();