//import express from "express"
//import cors from "cors"

const express = require ('express');
const cors = require ('cors');
const http = require ('http');

const socketConfig = require ('./socket');
const pool = require("./db");
// require is a built in function to include external modules

const app = express ();
const server = http.createServer(app);
app.use (cors());
app.use (express.json());

app.get ('/message', (req, res) => {
    res.json ({message: "Hello, I'm the server!"});
});

//express func can be used to create express application
//cors allows corss-origin requests, app.use() adds cors middleware to express

app.listen (8000, () => {
    console.log ('Server is running on port 8000');
});