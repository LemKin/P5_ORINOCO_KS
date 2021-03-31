const confirmCommande = async () => {
    try {
        resultOrder();
    } catch {
        document.getElementById("detailProduit").innerHTML = "<div class='msg_error'>Aucune commande passée, tu es arrivé ici par erreur</div>";
    }
}

confirmCommande();