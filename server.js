const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");


const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//app.set("port", (process.env.PORT || 8080));

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
    const accountSid = 'AC6e00b9cc0ba1867e8cfbf48e79860661';
    const authToken = '9ab4fb0a44ee0e05ce1b68ad74856e56';
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

app.listen(8080, () => {
    console.log("listening at http://localhost:8080")
});