// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routers/posts.js';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

const PORT = 5000;
const URI = "mongodb+srv://thanhvo:node123@cluster0.9ivdt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use("/post", router);

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`Server is running at the port ${PORT}`);
    });
}).catch((err) => {
    console.log('err', err);
});

// app.get("/", (request, response) => {
//     response.send("a réussi");
// })
