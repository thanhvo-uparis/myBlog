//pwd: IvzJJ7gt4n1vTU2f
import express from 'express';

const router = express.Router();

router.get("/", (request, response) => {
    response.send("un message de thanhcongvo");
})

export default router;