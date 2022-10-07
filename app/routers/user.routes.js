const {aurhJwt} = require("../middleware");
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
        [aurhJwt.verifyToken],
        controller.userBoard
    );

    app.get(
        "/api/test/mod",
        [aurhJwt.verifyToken, aurhJwt.isModerator],
        controller.moderatorBoard
    );

    app.get(
        "/api/test/admin",
        [aurhJwt.verifyToken, aurhJwt.isAdmin],
        controller.adminBoard
    );

    app.get(
        "/api/test/yk",
        [aurhJwt.verifyToken, aurhJwt.isYK],
        controller.ykBoard
    );

    app.get(
        "/api/test/ddk",
        [aurhJwt.verifyToken, aurhJwt.isDDK],
        controller.ddkBoard
    );

    app.get(
        "/api/test/latinEgitmen",
        [aurhJwt.verifyToken, aurhJwt.isLatinEgitmen],
        controller.latinEgitmenBoard
    );

    app.get(
        "/api/test/dansciUye",
        [aurhJwt.verifyToken, aurhJwt.isDansciUye],
        controller.dansciUyeBoard
    );

};

// Language: javascript
// Path: app\controllers\user.controller.js