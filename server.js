const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
var PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("port", (process.env.PORT || 8080));

app.set("views", "./views");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const data = {
        person: {
            firstName: "Devin",
            lastName: "Ledesma"
        }
    }
    res.render("index", data);
});

app.get("/projects", (req, res) => {
    res.render("projects");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.post("/thanks", (req, res) => {
    
    
    // Twilio Credentials
    const accountSid = process.env.accountSid;
    const authToken = process.env.authToken;


    // require the Twilio module and create a REST client
    const client = require('twilio')(accountSid, authToken);

    client.messages
    .create({
        to: '+18588699338',
        from: '+18582950507',
        body: JSON.stringify(req.body),
    })
    .then(message => console.log(message.sid));

    res.render("thanks", {contact: req.body})
});

module.exports = app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
});