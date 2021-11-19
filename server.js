const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require(mongojs);
const path = require("path")

const PORT = process.env.PORT || 3000;

const db = require("./models");
const { Workout, Exercise } = require("./models");

