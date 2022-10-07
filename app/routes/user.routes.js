const {authJwt} = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/test/all",
        controller.allAccess
    );

    app.get(
        "/api/test/user",
        [authJwt.verifyToken],
        controller.userBoard
    );

    app.get(
        "/api/test/mod",
        [authJwt.verifyToken, authJwt.isModerator],
        controller.moderatorBoard
    );

    app.get(
        "/api/test/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminBoard
    );

    app.get(
        "/api/test/yk",
        [authJwt.verifyToken, authJwt.isYK],
        controller.ykBoard
    );

    app.get(
        "/api/test/ddk",
        [authJwt.verifyToken, authJwt.isDDK],
        controller.ddkBoard
    );

    app.get(
        "/api/test/latinEgitmen",
        [authJwt.verifyToken, authJwt.isLatinEgitmen],
        controller.latinEgitmenBoard
    );

    app.get(
        "/api/test/dansciUye",
        [authJwt.verifyToken, authJwt.isDansciUye],
        controller.dansciUyeBoard
    );

};

// Language: javascript
// Path: app\controllers\user.controller.js