const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Booking {
    _id: ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
}
type Event {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    date: String!
    creator: User!
}
type User {
    _id: ID!
    email: String!
    password: String
    createdEvents: [Event!]
}
<<<<<<< HEAD
type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
}
=======
>>>>>>> 60230a27ac8f60a5b63dd5c861dd3fddd20e324d
input EventInput {
    title: String!
    description: String!
    price: Float!
    date: String!

} 
input UserInput {
    email: String!
    password: String!
}
type RootQuery {
    events: [Event!]!
    bookings: [Booking!]!
<<<<<<< HEAD
    login(email:  String!, password: String!): AuthData!
=======
>>>>>>> 60230a27ac8f60a5b63dd5c861dd3fddd20e324d
}
type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    bookEvent(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Event!
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);

