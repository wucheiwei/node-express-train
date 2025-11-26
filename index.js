const express = require("express");
const app = express();
const session = require("express-session");
require("dotenv").config();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.get("/", function (req, res) {
    const name = req.session.data
    let message = "";
    if (name) { message = "最近曾經查詢過" + name; }
    res.send("你好這是首頁" + message);
});
app.get("/getData", function (req, res) {
    let name = "";
    if (req.session.data) {
        name = req.session.data
        req.session.data = name;
    }
    if (name == 'taipei') {
        let data = { pop: 300, name: "台北市" };
        res.render("city.ejs", data);
    } else if (name == 'hsinchu') {
        let data = { pop: 40, name: "新竹市" };
        res.render("city.ejs", data);
    } else {
        res.redirect("https://www.google.com/search?q=" + name);
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});