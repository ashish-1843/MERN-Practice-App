const jwt = require('jsonwebtoken');
const config = require('../config/config');
const blacklistModel = require('../models/blacklist.model');

/**
 * Verify the short lived access token sent as: 
 * Authorization: Bearer <accessToken>
 */
const authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Access token is not provided."
            });
        }

        const accessToken = authHeader.split(" ")[1];

        const isTokenBlacklisted = await blacklistModel.findOne({
            token: accessToken,
            type: "accessToken"
        })

        
        if (isTokenBlacklisted) {
            return res.status(401).json({
                message: "Access token is revoked."
            });
        }

        const decoded = jwt.verify(accessToken, config.JWT_SECRET);

        req.user = decoded;

        next();
    }
    catch (err) {
        console.log("Give me error : ", err);
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Access token expired" });
        }

        return res.status(401).json({
            message: "Invalid Access token."
        });
    }
}

module.exports = { authUser };