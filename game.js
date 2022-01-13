const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.set("view engine", "ejs");


app.get("/", function(req, res) {
     res.render("game", {TicTacToe: "Tic-Tac-Toe"});
});


app.post("/", function(req, res) {
     res.render("game", {TicTacToe: "game over"});
});


app.listen(3000, function() {
     console.log("The server is running on port 3000.");
});
