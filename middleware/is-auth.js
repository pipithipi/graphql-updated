module.exports = (req, res, next) => {
    const authHeader = req.get('Authrization');
    if (!authHeader) {
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(' ')[1]; //Bearer dfafasf
    if(!token || token === '') {
        req.isAuth = false;
        return next();
    }
    try {
        decodeToken = jwt.verify(token, 'somesupersecretkey');
    } catch(err) {
        req.isAuth = false;
        return next();
    }
    if (!decodeToken) {
        req.isAuth = false;
        return next();
    }
    req.isAuth = false;
    req.userId = decodeToken.userId;
    next();
}