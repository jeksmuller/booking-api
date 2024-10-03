import express from 'express';
import mongoose from 'mongoose';
import { bookingRouter } from './routes/all-routes.js';
import 'dotenv/config'
import cors from 'cors'



// connect database
await mongoose.connect(process.env.MONGO_URI);



// create an express app
const app = express();


// listen for incoming request
const PORT = 3000


app.use(express.json())
app.use(cors())
app.use(bookingRouter)

app.listen(3000, () => {
    console.log(`server is listening on ${PORT}`);
});