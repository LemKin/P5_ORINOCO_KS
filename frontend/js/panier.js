const chargerPanier = async () => {
    try {
        const panier = await request(`http://localhost:3000/api/teddies/`);
        console.log(panier);
        detailPanier(panier);
        } catch  (error) {
            document.getElementById("detailProduit").innerHTML = "<div class='msg_error'>Mauvais chargement du Panier</div>";
        }
}

chargerPanier();