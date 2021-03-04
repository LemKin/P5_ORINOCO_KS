const chargerPanier = async () => {

        const panier = getPanier();
        panier.forEach(produit => {
                detailPanier(produit);
            })
        console.log(panier);
}

chargerPanier();
