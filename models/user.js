const { string, required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:
    {
        type:String,
        required:true
    }
    
});

// username and password and its salted
//  hashvalue is automatically saved by mongoose
//also provides methods
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',userSchema)