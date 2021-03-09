const chargerPanier = async () => {

        const panier = getPanier();
        panier.forEach((produit, indexProduit) => {
                detailPanier(produit, indexProduit);
            })
        //panier.forEach(detailPanier) //idem arrow du dessus
        console.log(panier);
}

chargerPanier();
