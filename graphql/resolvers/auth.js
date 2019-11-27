const bcrypt = require('bcryptjs');
<<<<<<< HEAD
const jwt = require('jsonwebtoken');
=======
>>>>>>> 60230a27ac8f60a5b63dd5c861dd3fddd20e324d

const User = require('../../models/user');

module.exports = {
    createUser: async args => {
        try {
            const existingUser = await User.findOne({ email: args.userInput.email });
            if (existingUser) {
                throw new Error('User exists already.')
            }
            const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

            const user = new User({
                email: args.userInput.email,
                password: hashedPassword
            });

            const result = await user.save();
            return {...result._doc, password: null, _id: result.id };
        } catch(err) {
            throw err;
        };
    },
<<<<<<< HEAD
    login: async ({email, password}) => {
        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error('User does not exist!');
        }
        const isEqual = await bcrypt.compare(password, user.password);
        if(!isEqual) {
            throw new Error('Password is incorrect!');
        }
        const token = jwt.sign({userId: user.id, email: user.email}, 'somesupersecretkey', {
            expiresIn: '1h'
        });
        return { userId: user.id, token: token, tokenExpiration: 1};
    }
=======
>>>>>>> 60230a27ac8f60a5b63dd5c861dd3fddd20e324d
};
