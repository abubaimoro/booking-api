import express from 'express';

import { bookingRouter } from './routes/all-routes.js';
// create an express app
const bookingApp = express();

// define route
bookingApp.get('/booking', (req, res, next) => {
    console.log(req.headers);
    res.json('Book with us');
});

bookingApp.use (bookingRouter)


// listen for upcoming requests
bookingApp.listen(3000, function(){
    console.log('App is listening on port 3000')
}); 

