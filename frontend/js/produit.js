const chargerProduit = async () => {

    let params = new URLSearchParams(document.location.search.substring(1));
    let id = params.get("selected");
    console.log(id);
    const produit = await request(`http://localhost:3000/api/teddies/${id}`);
    console.log(produit);
    selected(produit);
}

chargerProduit();