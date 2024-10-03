import { Router } from "express"
import { getAllBooking, getOneBooking, updateBooking, deleteBooking, postBooking } from "../controllers/booking-controllers.js"


export const bookingRouter = Router()
export const oneBookingRouter = Router()

bookingRouter.get('/bookings', getAllBooking)
bookingRouter.get('/bookings/:id', getOneBooking)


bookingRouter.post('/bookings', postBooking)

bookingRouter.patch('/bookings/:id', updateBooking)

bookingRouter.delete('/bookings/:id', deleteBooking)