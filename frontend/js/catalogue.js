const chargerCatalogue = async () => {
    const produits = await request("http://localhost:3000/api/teddies/");
    console.log(produits);
    produits.forEach(produit => {
        afficherProduit(produit);
    });
}

chargerCatalogue();