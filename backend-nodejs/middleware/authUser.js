const jwt = require('jsonwebtoken');

const User = require('../model/UserModel');
const HttpError = require('../utils/HttpError');
const env = require('../config/environment');

const authUser = async (req, res, next) => {
    try {
        const token = req.header('Authorization').split(' ')[1];
        if (!token) {
            throw new HttpError('Token not found', 401);
        }
        const decoded = jwt.verify(token, env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            throw new HttpError('User not found', 404);
        }
        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = authUser;
