const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const passport = require('passport');
const { saveRedirectUrl } = require("../middleware.js");
const usersController = require("../controllers/users.js");
// const { signUp } = require("../controllers/USERS.JS");

router.route("/signup")
.get(usersController.getSignupForm)
.post(wrapAsync(usersController.signUp));

router.route("/login")
.get(usersController.getLoginForm)
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),usersController.logIn)

//logout
router.get("/logout",usersController.logOut)

module.exports = router;