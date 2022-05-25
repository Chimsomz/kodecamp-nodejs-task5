//jshint esversion:6
const express = require(`express`); //import express
const app = express(); //create express server
const conn = require(`./connector`); //import mongoose
const routes = require(`./controller/routes`); //import routes


app.use(express.json()); // read json middleware

app.use(`/`, routes); //use routes middleware


//Listen an d create port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app is listening at port ${PORT}`);
});
