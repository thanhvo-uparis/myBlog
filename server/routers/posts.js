//pwd: IvzJJ7gt4n1vTU2f
import express from 'express';

const router = express.Router();

router.get("/", (request, response) => {
    response.send("un message privé par thanhcongvo");
})

export default router;