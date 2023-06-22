const jwt = require('jsonwebtoken');
const config = require('../../config/auth');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: true,
            code: 130,
            message: "Token de autenticação não existente!"
        });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = jwt.verify(token, config.secret);
        req.user_id = decoded.id;
        next();
    } catch (err) {
        return res.status(401).json({
            error: true,
            code: 130,
            message: err.name === 'TokenExpiredError' ? "Token de autenticação expirado!" : "Token de autenticação inválido!"
        });
    }
}