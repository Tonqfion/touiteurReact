class TouitAPI {

    static getTouits(timestamp, callback) {
        const request = new XMLHttpRequest();
        request.open("GET", "http://touiteur.cefim-formation.org/list?ts=" + encodeURIComponent(timestamp), true);
        request.addEventListener("readystatechange", () => {
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    const response = JSON.parse(request.responseText);
                    callback(response);
                } else {
                    // Erreur HTTP
                }
            }
        });
        request.send();
    }

    static getTouitsFetch(timestamp, callback) {
        fetch("http://touiteur.cefim-formation.org/list?ts=" + encodeURIComponent(timestamp))
            .then(response => response.json())
            .then(result => (callback(result)))
    }

    static getTrending(callback) {
        fetch("http://touiteur.cefim-formation.org/trending")
            .then(response => response.json())
            .then(result => (callback(result)))
    }
}

export default TouitAPI;