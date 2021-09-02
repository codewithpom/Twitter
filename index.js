import express from "express";
import twit from "twit";
import dotenv from "dotenv";
import path from 'path';
const __dirname = path.resolve();
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const port = 5050;const T = new twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.token,
    access_token_secret: process.env.token_secret,
});



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/index.html")
})

app.get("/profile/:screen_name", (req, res) => {
    const options = {
        screen_name: req.params.screen_name,
    };

    console.log(options);

    T.get("/users/show", options, function (err, data) {
        console.log(data)
        res.removeHeader("x-powered-by")
        res.json(data)
    })
})

app.listen(port, "localhost", () => {
    console.log(`app listening on port ${port}`)
})
