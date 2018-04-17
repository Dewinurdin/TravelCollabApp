const router = require('express').Router();
const userController = require('../../controllers/userController');
const path = require("path");

router.route("/signup")
    .post(userController.signup);

router.route("/signin")
    .get(userController.findById)
    .post(userController.signin);    

router.route("/signout")
    .get(userController.signout);

router.route("/user/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);


module.exports = router;