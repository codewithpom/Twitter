const config = require("./config")

config.app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/index.html")
})

config.app.get("/profile/:screen_name", (req, res) => {
    const options = {
        screen_name: req.params.screen_name,
    };

    console.log(options);

    config.T.get("/users/show", options, function (err, data) {
        console.log(data)
        res.removeHeader("x-powered-by")
        res.json(data)
    })
})

config.app.listen(config.port, "localhost", () => {
    console.log(`config.app listening on port ${config.port}`)
})
