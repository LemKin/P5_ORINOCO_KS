/*
//Image A : Norbert
const imageA = document.querySelector('#pict_A');

fetch('http://localhost:3000/images/teddy_1.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  imageA.src = objectURL;
});


//Image B : Arnold
const imageB = document.querySelector('#pict_B');

fetch('http://localhost:3000/images/teddy_2.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  imageB.src = objectURL;
});


//Image C : Lenny & Carl
const imageC = document.querySelector('#pict_C');

fetch('http://localhost:3000/images/teddy_3.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  imageC.src = objectURL;
});


//Image D : Gustav
const imageD = document.querySelector('#pict_D');

fetch('http://localhost:3000/images/teddy_4.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  imageD.src = objectURL;
});


//Image E : Garfunkel
const imageE = document.querySelector('#pict_E');

fetch('http://localhost:3000/images/teddy_5.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  imageE.src = objectURL;
});
*/

function afficherProduit(produit) {
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
                                            <p>${produit.description}</p>
                                            <span>${produit.price/100 + " €"}</span>
                                        </div>
                                        <a href="#">Adopter</a>
                                    </div>
                                </div>
                            </div>`
    document.getElementById("liste_produits").appendChild(container);

}

