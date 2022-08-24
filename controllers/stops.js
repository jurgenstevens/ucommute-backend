import 'dotenv/config.js'
import { response } from 'express'
import fetch from "node-fetch"
import parse from 'xml2json'

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
    console.log("This is response: ", response)
    // const data = await response.json()
    // console.log("This is DATA: ", data)
    const json = parse.toJson(response);
    console.log("result in json: ", json);
}


// function show(req, res){
//     // let ctaKey = process.env.CTA_API_KEY
//     let stopId = req.params.id
//     let ctaUrl = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx`
//     const headers = {
//         "Content-Type": "application/json",
//         "key": process.env.CTA_API_KEY
//     }
//     fetch(`${ctaUrl}?key=${process.env.CTA_API_KEY}&mapid=${stopId}`, {
//         method: "GET"
//     })
    // fetch(`${ctaUrl}&mapid=${stopId}`, {
    //     method: "GET"
    // })
//     .then(res => {
//         const json = res.json()
//         console.log(json)
//     })
//     .then(data => {
//         console.log("This is data: ", data)
//         const json = parser.toJson(data);
//         console.log("result in json: ", json);
//       })
//       .catch(err => console.log(err));
// }

export {
    index,
    show
}