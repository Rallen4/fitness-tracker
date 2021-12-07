const mongoose = require("mongoose");
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    exercises: [{
        type: {
            type: String
        },
        name: {
            type: String,
        },
        duration: Number,
        distance: Number, 
        weight: Number,
        reps: Number,
        sets: Number
    }],
    day: {
        type: Date,
        default: () => new Date()
    },
})

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout