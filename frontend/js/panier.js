const chargerPanier = async () => {

        afficherPanier();

        document.querySelector(".vide_panier").addEventListener("click", () => {
                viderPanier();
                afficherPanier();
        })
        //bouton "valider ma commande"
        let form = document.getElementById('form_panier');
        form.addEventListener('submit', validation); //écoute de l'évènement de soumission du formulaire
}

chargerPanier();

