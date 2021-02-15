const request = async (url) => {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        let data = await response.json();
        return data;
}