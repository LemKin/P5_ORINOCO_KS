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

const afficherLesProduits = (produit) => {
    console.log(produit.name);
    console.log(produit.price);
    console.log(produit.description);
    console.log("---");
}