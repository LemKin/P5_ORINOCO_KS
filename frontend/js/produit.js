const chargerProduit = async () => {
    try {
        let params = new URLSearchParams(document.location.search.substring(1));
        let id = params.get("detailProduit");
        console.log(id);
        const produit = await request(`http://localhost:3000/api/teddies/${id}`);
        console.log(produit);
        detailProduit(produit);
        } catch  (error) {
            document.getElementById("detailProduit").innerHTML = "<div class='msg_error'>Mauvais chargement du Produit</div>";
        }
}

chargerProduit();