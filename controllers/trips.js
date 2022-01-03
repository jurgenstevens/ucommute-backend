import { Trip } from '../models/trip.js' // S12

// S12: Stub up all of the functions
function index(req, res){
    Trip.find({})
    .then(trips => {
        res.json(trips) // S13: All we need to do is respond with a JSON object
    })
    .catch(err => {
        res.json(err)
    })
}
   
function show(req, res){

}

function create(req, res){ // S13
    Trip.create(req.body)
    .then(trip => {
        res.json(trip)
    })
    .catch(err => {
        res.json(err)
    })
}

function update(req, res){

}

function deleteStation(req, res){

}

// S12: Export all of the functions
export {
    index,
    show,
    create,
    update,
    deleteStation as delete
}

