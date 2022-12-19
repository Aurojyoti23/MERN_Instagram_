const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const mongoURL = require("./keys");
const cors = require("cors");

app.use(cors());
require("./models/model");
app.use(express.json());
app.use(require("./routes/auth"));
mongoose.connect(mongoURL);

// const data = require('./data')


mongoose.connect(mongoURL);
mongoose.connection.on("connected", ()=>{
    console.log("successfully connected to mongodb");
})
mongoose.connection.on("error", ()=>{
    console.log("not connected to mongodb");
})

// app.get('/about', (req, res) => {
//     res.json("About World!")
// });

app.listen(PORT, ()=>{
    console.log("server is running on port " + PORT)
})










// const http = require('http');
// const server = http.createServer((req, res)=>{
//     console.log('server creted')
//     res.end('Hello Shomu');
// });

// server.listen(5000, 'localhost', () => {
//     console.log("server is running on 5000")
// })