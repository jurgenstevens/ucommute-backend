import { Trip } from '../models/trip.js' 

// Stub up all of the functions
function index(req, res){
    Trip.find({})
    .populate(['commuter', 'destination', 'origin'])
    .exec()
    .then(trips => {
        res.json(trips) // All we need to do is respond with a JSON object
    }) 
    .catch(err => {
        res.json(err)
        console.log("Error:", err)
    })
}

function show(req, res){
    Trip.findById(req.params.id)
    .populate(['origin', 'destination', 'commuter'])
    .then(trip => {
        res.json(trip)
    })
    .catch(err => {
        res.json(err)
    })
}

function create(req, res){
    req.body.commuter = req.user.profile
    Trip.create(req.body)
    .then(newTrip => {
        newTrip.populate(['commuter', 'destination', 'origin'])
        .then(trip => {
            res.json(trip)
        })
    })
    .catch(err => {
        res.json(err)
    })
}

function update(req, res){
    Trip.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(newTrip => {
        newTrip.populate(['commuter', 'destination', 'origin'])
        .then(trip => {
            res.json(trip)
        })
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

