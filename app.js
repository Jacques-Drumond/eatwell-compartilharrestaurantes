const path = require("path");


const express = require("express");
const res = require("express/lib/response");
const req = require("express/lib/request");



const defaultRoutes = require('./routes/default')
const restaurantsRoutes = require('./routes/restaurants')


const app = express();

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use('/', defaultRoutes)

app.use('/', restaurantsRoutes)

app.use(function(req, res) {
  res.status(404).render('404')
});


app.use(function(error, res, res, next){
  res.status(500).render('500')
});


app.listen(3000);

