/* CATALOGUE */

const afficherProduit = (produit) => {
  //console.log(produit.name);
  //console.log(produit.price);
  //console.log(produit.description);
  //console.log("---");

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
                            <div class="imgBx"><img src="${produit.imageUrl}"></div>

                                <div class="contentBx">

                                <h2 class="produit_name">${produit.name}</h2>
                                <form>
                                    <div class="color">
                                        <p class="description">${
                                          produit.description
                                        }</p>
                                        <span>${monnaie(produit.price / 100)}</span>
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
                                    <text id="total">${monnaie(produit.price / 100)}</text>
                                </div>
                            </div>

                            <button class="buttonCmd" id="btnPanier">
                              <a href="produit.html?detailProduit=${produit._id}">Ajouter au panier</a>
                            </button>
                            
                        </div>`;
        document.getElementById("detailProduit").append(container);
        document.querySelector("#selectQte").addEventListener("change", (event) => {
            document.querySelector("#total").innerHTML = monnaie(
            (event.target.value * produit.price) / 100
            );
        });
        document.querySelector("#btnPanier").addEventListener("click", (event) => {
            event.preventDefault()
            console.log(produit);
            //localStorage.setItem('panier',JSON.stringify(produit));

            const panier = getPanier();

            const produitPanier = {
              ...produit,
              couleur : document.querySelector("#selectColor").value,
              quantite : document.querySelector("#selectQte").value
            }

            panier.push(produitPanier);
            console.log(panier);

            setPanier(panier);


            //redirection
            document.location.href="panier.html"; 
            


            //localStorage.setItem("panier",JSON.parse(localStorage.getItem('panier')));
            //console.log("nb_ligne(s)_panier");
            //localStorage.getItem("panier",JSON.stringify(localStorage.setItem('panier')));


            /*let produit = JSON.stringify(detailProduit);
            window.localStorage.setItem('detailProduit', produit);
            let test = JSON.parse(window.localStorage.getItem('detailProduit'));*/
            
            

            //lire la clée panier dans le localStorage
            //parser le JSON du panier
            //ajouter le produit sélectionné dans le tableau
            //stringify le JSON
            //écrit dans le localStorage - setItem

            /*TEST
            const produit = {id:"5beaacd41c9d440000a57d97"};
            const couleur = 'Beige';
            const quantite = 2;
            const panier = JSON.parse(localStorage.getItem('panier'))
            const cleProduit = `${produit.id}/${couleur}`
            */

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

const detailPanier = (produit, indexProduit) => {
  //console.log(produit.name);
  //console.log(produit.price);
  //console.log(produit.description);
  //console.log("---");

  const containerPanier = document.createElement('div');
  containerPanier.className = 'container_panier';
  const listePanier = document.querySelector("#liste_panier");
  listePanier.append(containerPanier);

    const slotPanier = document.createElement('div');
    slotPanier.className = "slot_panier";
    containerPanier.append(slotPanier);

      const illuPanier = document.createElement('div');
      illuPanier.className = "illu_panier";
      slotPanier.append(illuPanier);

        const img = document.createElement('img');
        img.src = produit.imageUrl;
        illuPanier.append(img);

          const detailPanier = document.createElement('div');
          detailPanier.className = "detail_panier";
          slotPanier.append(detailPanier);

            const panName = document.createElement('h2');
            panName.className = "pan_name";
            panName.append(produit.name);
            detailPanier.append(panName);

            const detailColor = document.createElement('div');
            detailColor.className = "detail_color";
            detailColor.append("Couleur : " + produit.couleur);
            detailPanier.append(detailColor);

            const detailQte = document.createElement('div');
            detailQte.className = "detail_qte";
            detailQte.append("Quantité : " + produit.quantite);
            detailPanier.append(detailQte);

            const detailPrice = document.createElement('div');
            detailPrice.className = "detail_price";
            detailPrice.append("Prix : " + monnaie((produit.price / 100)*produit.quantite));
            detailPanier.append(detailPrice);

          const corbeille = document.createElement('a');
          corbeille.className = "corbeille";
          corbeille.href = "#";
          corbeille.ariaLabel = "Supprimer l'article";
          slotPanier.append(corbeille);

            const icone = document.createElement('i');
            icone.className = "fas fa-trash-alt";
            corbeille.append(icone);

  corbeille.addEventListener("click", event => {
    event.preventDefault();
    console.log("suppresion produit", indexProduit);
    const panier = getPanier();
    panier.splice(indexProduit, 1);
    setPanier(panier);
    document.location.reload();
    
  })

  //remove
  //document.querySelector("").addEventListener("click", (event) =>
};


