const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require(mongojs);
const path = require("path")

const PORT = process.env.PORT || 3000;

const db = require("./models");
const { Workout, Exercise } = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify:true
});

app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
})