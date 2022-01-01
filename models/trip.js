import mongoose from 'mongoose'

const tripSchema = new mongoose.Schema({
    tripName: String,
    origin: String,
    destination: String
})

const Trip = mongoose.model('Trip', tripSchema)

export {
    Trip
}