const afficherProduit = (produit) => {
    console.log(produit.name);
    console.log(produit.price);
    console.log(produit.description);
    console.log("---");

    /*
    const container = document.createElement("div");
    container.className = "container";
    const listeProduits = document.querySelector("#liste_produits");
    listeProduits.append(container);

    const card = document.createElement("div");
    card.className = "card";
    container.append(card);

    const imgBx = document.createElement("div");
    imgBx.className = "imgBx";
    card.append(imgBx);

    const contentBx = document.createElement("div");
    contentBx.className = "contentBx";
    card.append(contentBx);

    const img = document.createElement("img");
    img.src = produit.imageUrl;
    imgBx.append(img);

    const object = document.createElement("h2");
    object.className = produit.name;
    container.append(object);
*/

    
    const container = document.createElement("div");
    container.innerHTML = `<div class="container">
                                <div class="card">
                                <div class="imgBx"><img src="${produit.imageUrl}"></div>
                                    <div class="contentBx">
                                        <h2>${produit.name}</h2>
                                        <div class="color">
                                            <p class="description">${produit.description}</p>
                                            <span>${produit.price/100 + " €"}</span>
                                        </div>
                                        <a href="produit.html?selected=${produit._id}">Adopter</a>
                                    </div>
                                </div>
                            </div>`
    document.getElementById("liste_produits").append(container);



}


const selected = (produit) => {
    console.log(produit.name);
    console.log(produit.price);
    console.log(produit.description);
    console.log("---");

const container = document.createElement("div");
container.innerHTML = `<div class="container">
                            <div class="card">
                            <div class="imgBx"><img src="${produit.imageUrl}"></div>

                                <div class="contentBx">

                                <h2>${produit.name}</h2>
                                <form>
                                    <div class="color">
                                        <p class="description">${produit.description}</p>
                                        <span>${produit.price/100 + " €"}</span>
                                    </div>
                                </form>
                                </div>
                            </div>

                            <div class="option">
                                <label>Couleur</label>
                                <select id="selectColor">${produit.colors}</select>
                                <label>Quantité</label>
                                <input type="number" id="selectQte" name="Quantité" min="1" value="1"></input>
                                <label>Total</label>
                                <text id="total">${produit.price/100 + " €"*'#selectQte'}</text>
                            </div>

                            <div class="buttonCmd">
                                <a href="produit.html?selected=${produit._id}">Ajouter au panier</a>
                            </div>
                            
                        </div>`
document.getElementById("selected").append(container);
}