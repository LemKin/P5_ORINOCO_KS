const request = async (url) => {
    /*try {*/
        let response = await fetch(url);
        let data = await response.json();
        return data;
    /*} catch (erreur) {
        console.error(`Mauvais chargement de la page : ${erreur}`)
    }*/
}