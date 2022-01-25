const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.set("view engine", "ejs");


app.get("/", function(req, res) {
     res.render("game");
});


app.listen(3000, function() {
     console.log("The server is running on port 3000.");
});
