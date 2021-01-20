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

    const img = document.createElement("img");
    img.src = produit.imageUrl;
    imgBx.append(img);

    const contentBx = document.createElement("div");
    contentBx.className = "contentBx";
    card.append(contentBx);

    const title = document.createElement("h3");
    title.className = produit.name;
    card.append(title);
}

