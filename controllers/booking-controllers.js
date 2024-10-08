  import { booking } from "../models/booking-models.js";
  
  
  export const getAllBooking = (req, res) => {
    res.status(200).json('these are all bookings');
 }

 export const getOneBooking = async (req, res, next) => {
 try {
     const newBooking = new booking(req.body);
     const bookings = await newBooking.save();
      res.status(200).json(bookings);
 } catch (error) {
   next(error)
 }
 }

 export const postAllBooking = async (req, res,) => {
      const newBooking = new booking(req.body);
      const bookings = await newBooking.save();
       res.status(201).json(bookings);

 }

 export const updateAllBooking = (req, res) => {
    res.status(200).json('A booking has been updated'); 
 }

 export const deleteAllBooking = (req, res) => {
    res.status(200).json('A booking has been deleted');
 }

