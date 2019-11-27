const Event = require('../../models/event');
const { transformEvent } = require('./merge');

module.exports = {
    events: async () => {
        try {
            const events = await Event.find();
            return events.map(event => {
                return transformEvent(event);
            });
        } catch (err) {
            throw err;
        }
    },
<<<<<<< HEAD
    createEvent: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }
=======
    createEvent: async args => {
>>>>>>> 60230a27ac8f60a5b63dd5c861dd3fddd20e324d
        const event = new Event({
            title: args.eventInput.title,
            description: args.eventInput.description,
            price: +args.eventInput.price,
            date: new Date(args.eventInput.date),
            creator: '5ddd0acb2ea84a0c081def59'
        });
        let createdEvent;
        try {
            const result = await event
            .save()
                createdEvent = transformEvent(result);
                const creator = await User.findById('5ddd0acb2ea84a0c081def59');
            if (!creator) {
                throw new Error('User not found.')
            }
            creator.createdEvents.push(event);
            await creator.save();
            return createdEvent;
        } catch(err) {
            console.log(err);
            throw err;
        }
    }
};
