const express = require("express");
const app = express();
import bodyParser from 'body-parser';
import cors from 'cors';
import { response } from 'express';

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));
app.use(cors());

app.get(request, response) {
    response.send("ket noi thanh cong");
}

const PORT = 5000;
app.listen(PORT, () => {console.log(`Server is running in the port ${PORT}`)})