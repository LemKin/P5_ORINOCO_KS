/* CATALOGUE */

const afficherProduit = (produit) => {
  //console.log(produit.name);
  //console.log(produit.price);
  //console.log(produit.description);
  //console.log("---");

  // <a href="produit.html?detailProduit=${produit._id}"></a>

  const container = document.createElement("div");
  container.innerHTML = `<div class="container">
                            <a href="produit.html?detailProduit=${
                              produit._id
                            }"><div class="card">
                                <div class="imgBx">
                                        <img src="${produit.imageUrl}"></div>
                                    <div class="contentBx">
                                        <h2 class="produit_name">${
                                          produit.name
                                        }</h2>
                                        <div class="color">
                                            <p class="description">${
                                              produit.description
                                            }</p>
                                            <span>${monnaie(
                                              produit.price / 100
                                            )}</span>
                                        </div>
                                        <a class="btn" href="produit.html?detailProduit=${
                                          produit._id
                                        }">Adopter</a>
                                    </div>
                                </div></a>
                            </div>`;
  document.getElementById("liste_produits").append(container);
};

/* PRODUIT */

const detailProduit = (produit) => {
  //console.log(produit.name);
  //console.log(produit.price);
  //console.log(produit.description);
  //console.log("---");

  document.title = produit.name;

  let optionColor = "";
  produit.colors.forEach((color) => {
    optionColor = optionColor + `<option value="${color}">${color}</option>`;
  });
  //toto = 1
  //toto = toto+2
  //toto = 3

  let selectQte = 1;

  const container = document.createElement("div");
  container.innerHTML = `<div class="container">
                            <div class="card">
                            <div class="imgBx"><img src="${
                              produit.imageUrl
                            }"></div>

                                <div class="contentBx">

                                <h2 class="produit_name">${produit.name}</h2>
                                <form>
                                    <div class="color">
                                        <p class="description">${
                                          produit.description
                                        }</p>
                                        <span>${monnaie(
                                          produit.price / 100
                                        )}</span>
                                    </div>
                                </form>
                                </div>
                            </div>

                            <div class="option">
                                <div class="option_A">
                                    <label class="title_label">Couleur </label>
                                    <select id="selectColor">${optionColor}</select>
                                </div>
                                <div class="option_B">
                                    <label class="title_label">Quantité</label>
                                    <input type="number" id="selectQte" name="Quantité" min="1" value="1"></input>
                                </div>
                                <div class="option_C">
                                    <label class="title_label">Total : </label>
                                    <text id="total">${monnaie(
                                      produit.price / 100
                                    )}</text>
                                </div>
                            </div>

                            <button class="buttonCmd" id="btnPanier">
                              <a href="produit.html?detailProduit=${
                                produit._id
                              }">Ajouter au panier</a>
                            </button>
                            
                        </div>`;
  document.getElementById("detailProduit").append(container);
  document.querySelector("#selectQte").addEventListener("change", (event) => {
    document.querySelector("#total").innerHTML = monnaie(
      (event.target.value * produit.price) / 100
    );
  });
  document.querySelector("#btnPanier").addEventListener("click", (event) => {
    event.preventDefault();
    console.log(produit);
    //localStorage.setItem('panier',JSON.stringify(produit));

    const panier = getPanier();

    const produitPanier = {
      ...produit,
      couleur: document.querySelector("#selectColor").value,
      quantite: document.querySelector("#selectQte").value,
    };

    panier.push(produitPanier);
    console.log(panier);

    setPanier(panier);

    //redirection
    document.location.href = "panier.html";

  });
};

const monnaie = (prix) => {
  const frCurrencyFormat = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
  const frCurrency = frCurrencyFormat.format(prix);
  return frCurrency;
};

/* PANIER */

const afficherPanier = () => {
  document.querySelector("#liste_panier").innerHTML = "";
  const panier = getPanier();
  if (panier.length >= 1) {
    panier.forEach((produit, indexProduit) => {
      detailPanier(produit, indexProduit);
    });
    calculTotal();
  } else {
    document.querySelector('#bloc_form_resume').innerHTML = '';
    document.querySelector("#liste_panier").innerHTML = "<div class='msg_error'>Ton Panier est vide...</div>";
  }
};


const detailPanier = (produit, indexProduit) => {
  //console.log(produit.name);
  //console.log(produit.price);
  //console.log(produit.description);
  //console.log("---");

  const containerPanier = document.createElement("div");
  containerPanier.className = "container_panier";
  const listePanier = document.querySelector("#liste_panier");
  listePanier.append(containerPanier);

  const slotPanier = document.createElement("div");
  slotPanier.className = "slot_panier";
  containerPanier.append(slotPanier);

  const illuPanier = document.createElement("div");
  illuPanier.className = "illu_panier";
  slotPanier.append(illuPanier);

  const img = document.createElement("img");
  img.src = produit.imageUrl;
  illuPanier.append(img);

  const detailPanier = document.createElement("div");
  detailPanier.className = "detail_panier";
  slotPanier.append(detailPanier);

  const panName = document.createElement("h2");
  panName.className = "pan_name";
  panName.append(produit.name);
  detailPanier.append(panName);

  const detailColor = document.createElement("div");
  detailColor.className = "detail_color";
  detailColor.append("Couleur : " + produit.couleur);
  detailPanier.append(detailColor);

  const detailQte = document.createElement("div");
  detailQte.className = "detail_qte";
  detailQte.append("Quantité : " + produit.quantite);
  detailPanier.append(detailQte);

  const detailPrice = document.createElement("div");
  detailPrice.className = "detail_price";
  detailPrice.append(
    "Prix : " + monnaie((produit.price / 100) * produit.quantite)
  );
  detailPanier.append(detailPrice);

  const corbeille = document.createElement("a");
  corbeille.className = "corbeille";
  corbeille.href = "#"; 
  corbeille.ariaLabel = "Supprimer l'article";
  slotPanier.append(corbeille);

  const icone = document.createElement("i");
  icone.className = "fas fa-trash-alt";
  corbeille.append(icone);

  corbeille.addEventListener("click", (event) => {
    event.preventDefault();
    const panier = getPanier();
    panier.splice(indexProduit, 1);
    setPanier(panier);
    afficherPanier();
  });
};

//Calcul total
const calculTotal = () => {
  let totalPanier = 0;
  console.log(localStorage.getItem('panier'),JSON.parse(localStorage.getItem('panier')));
  JSON.parse(localStorage.getItem('panier')).forEach((produit)=>{
    totalPanier += produit.price * produit.quantite / 100;
  });
  console.log(totalPanier);
  document.getElementById("total_price").textContent = `Montant total de la commande : ${totalPanier},00€`;
}




 //Formulaire
 const validation = (event) => {
   event.preventDefault();
   let isValid = true;
   //si le champ est vide
   let prenom = document.getElementById('firstName');
   //let missPrenom = document.getElementById('missPrenom');
   console.log(prenom.value);
   if (prenom.validity.valueMissing) {
     isValid = false;
     console.log("Hey");
     //missPrenom.textContent = 'Prenom manquant';
     //missPrenom.style.color = 'red';
   }
   if (isValid) {
     console.log('envoyer le message au server');
   }
 }