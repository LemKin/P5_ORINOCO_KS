const chargerPanier = async () => {

        afficherPanier();

        document.querySelector(".vide_panier").addEventListener("click", () => {
                viderPanier();
                afficherPanier();
        })
        let formValid = document.getElementById('bouton_envoi');
        formValid.addEventListener('click', validation);
}

chargerPanier();

