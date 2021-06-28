class TouitAPI {

    static getTouits(callback) {

        const request = new XMLHttpRequest();
        request.open("GET","http://touiteur.cefim-formation.org/list",true);
        request.addEventListener("readystatechange", () => {
            if(request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    const response = JSON.parse(request.responseText);
                    callback(response);
                } else {
                    // Erreur HTTP
                }
            }
        })
        request.send();
    }
}

export default TouitAPI;