import { Station } from '../models/station.js' // S12

// S12: Stub up all of the functions
function index(req, res){
    Station.find({})
    .then(stations => {
        res.json(stations) // S13: All we need to do is respond with a JSON object
    })
    .catch(err => {
        res.json(err)
    })
}

function show(req, res){
    Station.findById(req.params.id)
    .then(station => {
        res.json(station)
    })
    .catch(err => {
        res.json(err)
    })
}

function create(req, res){ // S13
    Station.create(req.body)
    .then(station => {
        res.json(station)
    })
    .catch(err => {
        res.json(err)
    })
}

function update(req, res){
    Station.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(station => {
        res.json(station)
    })
    .catch(err => {
        res.json(err)
    })
}

function deleteTrip(req, res){
    Station.findByIdAndDelete(req.params.id)
    .then(station => {
        res.json(station)
    })
    .catch(err => {
        res.json(err)
    })
}

// S12: Export all of the functions
export {
    index,
    show,
    create,
    update,
    deleteTrip as delete
}

