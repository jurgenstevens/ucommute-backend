import 'dotenv/config.js'
import fetch from "node-fetch"
import { parseString } from 'xml2js'


function index(req, res){
    const cityUrl = 'https://data.cityofchicago.org/resource/8pix-ypme.json'
    const headers = {
        "Content-Type": "application/json"
    }
    fetch(cityUrl, {
        method: "GET",
        headers: headers,
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        res.send(data)
    })
}


async function show(req, res){
    let stopId = req.params.id
    let ctaUrl = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx`
    const headers = {
        "Content-Type": "application/json",
        "key": process.env.CTA_API_KEY
    }

    const response = await fetch(`${ctaUrl}?key=${process.env.CTA_API_KEY}&mapid=${stopId}`)
    const data = await response.text()
    let resData
    return new Promise((resolve, reject) => {
        if(!data){
            reject("error")
        }
        else if(data){
            parseString(data, (err, results) => {
                let json = JSON.stringify(results)
                console.log("This is JSON: ", json)
                resData = json
            })
            res.send(resData)
        }
    })
}

export {
    index,
    show
}