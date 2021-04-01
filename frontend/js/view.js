/* --------- PAGE CATALOGUE --------- */

//compo de la liste de la page catalogue
const afficherProduit = (produit) => {
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

/* --------- PAGE PRODUIT --------- */

const detailProduit = (produit) => {
  //console.log(produit.name);
  //console.log(produit.price);
  //console.log(produit.description);
  //console.log("---");

  //l'onglet de la page prend le nom du produit sélectionné
  document.title = produit.name;

  //option couleur du produit
  let optionColor = "";
  produit.colors.forEach((color) => {
    optionColor = optionColor + `<option value="${color}">${color}</option>`;
  });

  let selectQte = 1;

  //compo de la page produit
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
  //bouton ajout panier
  document.querySelector("#btnPanier").addEventListener("click", (event) => {
    event.preventDefault();
    console.log(produit);

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

//format monétaire international
const monnaie = (prix) => {
  const frCurrencyFormat = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  });
  const frCurrency = frCurrencyFormat.format(prix);
  return frCurrency;
};

/* --------- PAGE PANIER --------- */

const afficherPanier = () => {
  document.querySelector("#liste_panier").innerHTML = "";
  const panier = getPanier();
  if (panier.length >= 1) {
    panier.forEach((produit, indexProduit) => {
      detailPanier(produit, indexProduit);
    });
    calculTotal();
  } else {
    //masquer le formulaire et le résumé si le panier est vide
    document.querySelector("#bloc_form_resume").innerHTML = "";
    //afficher message panier vide
    document.querySelector("#liste_panier").innerHTML =
      "<div class='msg_error'>Ton Panier est vide...</div>";
  }
};

const detailPanier = (produit, indexProduit) => {
  //console.log(produit.name);
  //console.log(produit.price);
  //console.log(produit.description);
  //console.log("---");

  //compo liste sélect. dans le panier
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

  //suppression produit
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
  //console.log(localStorage.getItem('panier'),JSON.parse(localStorage.getItem('panier')));
  getPanier().forEach((produit) => {
    totalPanier += (produit.price * produit.quantite) / 100;
  });
  document.getElementById(
    "total_price"
  ).textContent = `Montant total de la commande : ${monnaie(totalPanier)}`;
};

//Formulaire
const validation = async (event) => {
  event.preventDefault();
  let isValid = true;

  //PRÉNOM
  let prenom = document.getElementById("firstName");
  console.log(prenom.value);
  if (prenom.validity.valueMissing) {
    isValid = false;
  }

  //NOM
  let nom = document.getElementById("lastName");
  console.log(nom.value);
  if (nom.validity.valueMissing) {
    isValid = false;
  }

  //ADRESSE
  let addresse = document.getElementById("address");
  console.log(addresse.value);
  if (addresse.validity.valueMissing) {
    isValid = false;
  }

  //VILLE
  let ville = document.getElementById("city");
  console.log(ville.value);
  if (ville.validity.valueMissing) {
    isValid = false;
  }

  //MAIL
  let mail = document.getElementById("email");
  console.log(mail.value);
  if (mail.validity.valueMissing) {
    isValid = false;
  }

  if (!isValid) return; //si c'est pas valide interruption de la fonction

  const contact = {
    firstName: prenom.value,
    lastName: nom.value,
    address: addresse.value,
    city: ville.value,
    email: mail.value,
  };
  const products = getPanier().map((produit) => {
    return produit._id;
  }); //les id de la cmd

  const order = {
    contact,
    products,
  };

  const { orderId } = await request("http://localhost:3000/api/teddies/order", {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json", //on dit au server : le body = JSON
    },
  });
  localStorage.setItem("orderId", orderId);

  //redirection page confirmation
  document.location.href = "confirmation.html";
};

/* --------- PAGE CONFIRMATION --------- */

const resultOrder = () => {
  //Commande ok, message de remerciement
  if (localStorage.getItem("orderId") != null) {
    const orderId = getOrder();
    document.getElementById("orderId").append(orderId);
    calculTotal();
  } else {
    // Retirer le message de commande si le localStorage ne contient pas l'item orderId
    document.querySelector("#confirm").innerHTML = "";

    // Afficher un message d'erreur et rediriger l'utilisateur vers la page d'accueil
    let resultCommand = document.getElementById("confirmation_commande");
    let resultCommandError = document.createElement("div");
    let messageError = document.createElement("h4");
    messageError.innerHTML =
      "Pas de commande en cours ! <br> Redirection vers le catalogue, merci de patienter...";
    resultCommand.appendChild(resultCommandError);
    resultCommandError.appendChild(messageError);
    setTimeout(function () {
      window.location = "index.html";
    }, 5000);
  }
  //pour supprimer le contenu du localStorage
  localStorage.clear();
};
