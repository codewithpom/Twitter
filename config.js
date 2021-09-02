import express from "express";
import twit from "twit";
import dotenv from "dotenv";
import path from 'path';
const __dirname = path.resolve();
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json
const port = 5050;

const T = new twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.token,
    access_token_secret: process.env.token_secret,
});

// add the variables to module.export to use in the index.js file
module.exports.T = T;
module.exports.app = app();
module.exports.port = port;
module.exports.__dirname = __dirname;
module.exports.twit = twit;
module.exports.express = express;




