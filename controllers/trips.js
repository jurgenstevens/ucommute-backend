import { Trip } from '../models/trip.js' // S12

// S12: Stub up all of the functions
function index(req, res){
    Trip.find({})
    .pupulate('commuter')
    .then(trips => {
        res.json(trips) // S13: All we need to do is respond with a JSON object
    }) 
    .catch(err => {
        res.json(err)
    })
}

function show(req, res){
    Trip.findById(req.params.id)
    .populate(['origin', 'destination'])
    .then(trip => {
        res.json(trip)
    })
    .catch(err => {
        res.json(err)
    })
}

function create(req, res){ // S13
    req.body.commuter = req.user.profile
    Trip.create(req.body)
    .then(trip => {
        res.json(trip)
    })
    .catch(err => {
        res.json(err)
    })
}

function update(req, res){
    Trip.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(trip => {
        res.json(trip)
    })
    .catch(err => {
        res.json(err)
    })
}

function deleteTrip(req, res){
    Trip.findByIdAndDelete(req.params.id)
    .then(trip => {
        res.json(trip)
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

