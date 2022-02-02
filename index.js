//Contract Address: 0x7B37FE34e48BDA6f438c7DCe07ea7321E6016A56
require('dotenv').config();
const secuContract = require("./controllers/interact.js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require("./routes/user.routes.js");
const motoRoute = require("./routes/moto.routes.js");

app.get("/", (req, res, next) => {
    res.send("API WHICH INTERACT WITH SMART CONTRAT");
})
app.use("/api/user", routes);
app.use("/api/moto", motoRoute);
app.use((req, res, next) => {
    res.send("La route n'existe pas");
});

const main = async() => {
    // console.log("Create User ===>>")
    // await secuContract.createUser("imdad", "adelabou", "12345", "12/09/211", "67558797");
    // console.log("Get User ==>>>> ");
    await secuContract.getUser("12345");
}

main();
app.listen(3000, (err) => {
    if (!err)
        console.log("server is running correctly");
})