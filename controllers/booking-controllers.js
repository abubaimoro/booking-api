  export const getAllBooking = (req, res) => {
    res.status(200).json('these are all bookings')
 }

 export const getOneBooking = (req, res) => {
    res.status(200).json('This is just one booking')
 }

 export const postAllBooking = (req, res) => {
    res.status(200).json('A booking has been posted')
 }

 export const updateAllBooking = (req, res) => {
    res.status(200).json('A booking has been updated')
 }

 export const deleteAllBooking = (req, res) => {
    res.status(200).json('A booking has been deleted')
 }