const User = require("../models/user.js");


module.exports.getSignupForm = (req,res)=>{
    res.render("./users/signup.ejs");
}


module.exports.signUp = async (req,res)=>{
    try{
    let {username,email,password} = req.body;
    const newUser = new User({email,username});
    let registeredUser = await User.register(newUser,password);
    console.log(registeredUser);
    req.login(registeredUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success",`Welcome ${registeredUser.username}!`);
        res.redirect("/listings")
    })
    
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup")
    }
};

module.exports.getLoginForm = (req,res)=>{
    res.render("./users/login.ejs")
}

module.exports.logIn = async(req,res)=>{
    req.flash("success","Welcome Back to StayNest !");
    let redirectUrl = res.locals.redirect||"/listings";
    // console.log(redirectUrl);
    res.redirect(redirectUrl);
}

module.exports.logOut = (req,res)=>{
    req.logout((err)=>{
       if(err) {
        return next(err);
       }
       req.flash("success","You are Logged Out !");
       res.redirect("/listings");
    })
}