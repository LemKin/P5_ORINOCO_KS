async function chargerCatalogue() {
    const produits = await request("http://localhost:3000/api/teddies/")
    produits.forEach(produit => {
        afficherProduit(produit);
    });
}

chargerCatalogue();









/*let els = document.getElementById('demo');
els.innerHTML = afficherLesProduits;

let demo = document.getElementById("demo");
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    console.log(this);
    if (this.readyState == 4 && this.status == 200) {
        demo.innerHTML = this.responseText;
    }
};

xhr.open("GET", true);
xhr.send();*/