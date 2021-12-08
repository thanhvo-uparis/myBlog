import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routers/posts.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb'}));
app.use(cors());

app.use("/posts", router)

const PORT = 5000;
app.listen(PORT, () => {console.log(`Server is running in the port ${PORT}`)})