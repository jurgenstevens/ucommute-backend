import 'dotenv/config.js'
import { response } from 'express'
import fetch from "node-fetch"
import { parseString } from 'xml2js'
import util from "util"


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


// function show(req, res){

//     let ctaKey = process.env.CTA_API_KEY
//     let stopId = req.params.id
//     let ctaUrl = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx`
//     const headers = {
//         "Content-Type": "application/json",
//         "key": process.env.CTA_API_KEY
//     }
//     let parser = new xml2js.Parser()
//     let data = fetch(`${ctaUrl}?key=${ctaKey}&mapid=${stopId}`, {
//         method: "GET"
//     })
//     parser.parseStringPromise(data, (err, result) => {
//         console.log(result)
//     })
//     // .then(res => {
//     //     console.log(res)
//     //     res.send()
//     // })
//     // .catch(err => console.log(err));
// }



// function show(req, res){

//     let ctaKey = process.env.CTA_API_KEY
//     let stopId = req.params.id
//     let ctaUrl = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx`
//     const headers = {
//         "Content-Type": "application/json",
//         "key": process.env.CTA_API_KEY
//     }
//     fetch(`${ctaUrl}?key=${ctaKey}&mapid=${stopId}`, {
//         method: "GET"
//     })
//     .then(res => {
//         let data = res.text()
//         console.log("This is DATA: ", data)
//         parseString(data, (err, results) => {
//             let json = JSON.stringify(results)
//             console.log("This is JSON: ", json)
//             return json
//         })
//     })
//     .then(data => {
//         console.log(data)
//         parseString(data, (err, results) => {
//         let json = JSON.stringify(results)
//         console.log("This is JSON: ", json)
//         return json
//         })
//     })
//      .catch(err => console.log(err));
// }


export {
    index,
    show
}