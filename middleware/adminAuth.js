const jwt = require('jsonwebtoken')

exports.jwtAdminAuth = (req, res, next) => {
    console.log(req.cookies,req.cookies.adminToken);
    if (req.cookies && req.cookies.adminToken) {
        jwt.verify(req.cookies.adminToken, "pourtech2023xyz", (err, data) => {
            // console.log(data);
            req.admin = data
            next()
        })
    } else {
        next()
    }
}