import { Router } from "express";
import { getAllBooking, getOneBooking, postAllBooking, updateAllBooking, deleteAllBooking }  from "../controllers/booking-controllers.js";
export const bookingRouter = Router()

bookingRouter.get('/booking', getAllBooking)
bookingRouter.get('/booking/:id',getOneBooking)

bookingRouter.post('/booking',postAllBooking)
bookingRouter.patch('/booking/:id', updateAllBooking)
bookingRouter.delete('/booking/:id', deleteAllBooking)