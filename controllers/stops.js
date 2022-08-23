import 'dotenv/config.js'
import fetch from "node-fetch"

function index(req, res){
    let cityUrl = 'https://data.cityofchicago.org/resource/8pix-ypme.json'
    const headers = {
        "Content-Type": "application/json"
    };

    fetch(cityUrl, {
        method: "GET",
        headers: headers,
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        res.send({ data });
    })
}

export {
    index
}