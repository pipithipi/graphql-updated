const Booking = require('../../models/booking');
const Event = require('../../models/event');
const { transformEvent, transformBooking } = require('./merge');

module.exports = {
<<<<<<< HEAD
    bookings: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }
=======
    bookings: async () => {
>>>>>>> 60230a27ac8f60a5b63dd5c861dd3fddd20e324d
        try {
            const bookings = await Booking.find();
            return bookings.map(booking => {
                return transformBooking(booking);
            });
        } catch (err) {
            throw err;
        }
    },
<<<<<<< HEAD
    bookEvent: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }
=======
    bookEvent: async args => {
>>>>>>> 60230a27ac8f60a5b63dd5c861dd3fddd20e324d
        const fetchedEvent = await Event.findOne({_id: args.eventId})
        const booking = new Booking({
            user: '5ddd0acb2ea84a0c081def59',
            event: fetchedEvent
        });
        const result = await booking.save();
        return transformBooking(result);
    },
<<<<<<< HEAD
    cancelBooking: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }
=======
    cancelBooking: async args => {
>>>>>>> 60230a27ac8f60a5b63dd5c861dd3fddd20e324d
        try {
            const booking = await Booking.findById(args.bookingId).populate('event');
            const event = transformEvent(booking.event);
            await Booking.deleteOne({ _id: args.bookingId });
            return event;
        } catch(err) {
            throw err;
        }
    } 
};
