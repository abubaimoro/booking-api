import express from 'express';
import mongoose, { connect } from 'mongoose';
import 'dotenv/config'
import { bookingRouter } from './routes/all-routes.js';
import cors from "cors";
import { userRouter } from './routes/user-routes.js';

// connect to mongodb
await mongoose.connect(process.env.MONGO_URI); 

// create an express app
const bookingApp = express();

// define route
bookingApp.get('/booking', (req, res, next) => {
    console.log(req.headers);
    res.json('Book with us');
});
bookingApp.use(cors());
bookingApp.use(express.json());
bookingApp.use (bookingRouter);
bookingApp.use(userRouter);


// listen for upcoming requests
bookingApp.listen(3000, function(){
    console.log('App is listening on port 3000')
}); 

