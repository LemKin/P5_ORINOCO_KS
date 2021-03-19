const chargerCatalogue = async () => {
    try {
        const produits = await request("http://localhost:3000/api/teddies/");
        console.log(produits);
        produits.forEach(produit => {
            afficherProduit(produit);
        })
    } catch (error) {
        document.getElementById("liste_produits").innerHTML = "<div class='msg_error'>Échec du chargement du Catalogue</div>";
    }
}

chargerCatalogue();