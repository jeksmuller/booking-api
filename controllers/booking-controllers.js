import { booking } from "../models/booking-model.js"


export const getAllBooking = (req, res, next) => {
    res.status(200).json('these are all bookings')
}


export const getOneBooking = (req, res, next) => {
    res.status(200).json('this is one booking')
}

export const postBooking = async (req, res, next) => {
      const newBooking =  new booking(req.body)
       const bookings = await newBooking.save()
  
      res.status(201).json(bookings);
  }
    
    
export const updateBooking = (req, res, next) => {
    res.status(201).json('booking updated!');
}

export const deleteBooking = (req, res, next) => {
    res.status(201).json('booking deleted!');
}