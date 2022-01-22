import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tripSchema = new Schema({
    tripName: String,
    origin: {type: Schema.Types.Object, ref: "Station"},
    destination: {type: Schema.Types.Object, ref: "Station"},
    commuter: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
    timestamps: true
})

const Trip = mongoose.model('Trip', tripSchema)

export {
    Trip
}