import mongoose from 'mongoose'

const stationSchema = new mongoose.Schema({
    stopId: Number,
    station: String,
    line: String,
    transfer: Boolean,
    transferLine: [String]
}, {
    timestamps: true
});

const Station = mongoose.model('Station', stationSchema);

export {
    Station
}