import { Router } from "express";
import { aiReviwer } from "../services/ai.reviewer.js";

const router = Router();


router.post('/verifyCode',async (req,res) => {
    const code = req.body.code;
    const response = await aiReviwer(code);
    return res.send(response);
})


export const aiRouter = router;