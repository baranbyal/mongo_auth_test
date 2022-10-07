const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const db = require('../models');
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {

    let token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({message: 'No token provided!'});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({message: 'Unauthorized!'});
        }
        req.userId = decoded.id;
        next();
    });
};

isAdmin = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }

        Role.find(
            {
                _id: {$in: user.roles}
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === 'admin') {
                        next();
                        return;
                    }
                }

                res.status(403).send({message: 'Require Admin Role!'});
                return;
            }
        );
    });
};

isModerator = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }

        Role.find(
            {
                _id: {$in: user.roles}
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === 'moderator') {
                        next();
                        return;
                    }
                }

                res.status(403).send({message: 'Require Moderator Role!'});
                return;
            }
        );
    });
};

isDansciUye = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }

        Role.find(
            {
                _id: {$in: user.roles}
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === 'dansciUye') {
                        next();
                        return;
                    }
                }

                res.status(403).send({message: 'Require DansciUye Role!'});
                return;
            }
        );
    });
};

isYKOrDDK = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }

        Role.find(
            {
                _id: {$in: user.roles}
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === 'YK') {
                        next();
                        return;
                    }

                    if (roles[i].name === 'DDK') {
                        next();
                        return;
                    }
                }

                res.status(403).send({message: 'Require YK or DDK Role!'});
                return;
            }
        );
    });
};

isYK = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }

        Role.find(
            {
                _id: {$in: user.roles}
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === 'YK') {
                        next();
                        return;
                    }
                }

                res.status(403).send({message: 'Require YK Role!'});
                return;
            }
        );
    });
};

isDDK = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }

        Role.find(
            {
                _id: {$in: user.roles}
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === 'DDK') {
                        next();
                        return;
                    }
                }

                res.status(403).send({message: 'Require DDK Role!'});
                return;
            }
        );
    });
};

isLatinEgitmen = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }

        Role.find(
            {
                _id: {$in: user.roles}
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({message: err});
                    return;
                }

                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === 'latinEgitmen') {
                        next();
                        return;
                    }
                }

                res.status(403).send({message: 'Require Latin Egitmen Role!'});
                return;
            }
        );
    });
};

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isModerator: isModerator,
    isDansciUye: isDansciUye,
    isYKOrDDK: isYKOrDDK,
    isYK: isYK,
    isDDK: isDDK,
    isLatinEgitmen: isLatinEgitmen
};

module.exports = authJwt;




