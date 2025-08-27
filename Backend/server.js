import express from 'express';
import dotenv from 'dotenv';
import {aiRouter} from './routes/ai.routes.js';
import cors from 'cors';

const app = express();
const PORT = 3000;
dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send('hello');
})

app.use('/ai',aiRouter);

app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
}) 