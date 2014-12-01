/**
 * Created by Rob on 11/17/2014.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    color: String,
    role:String,
    hashed_password: String
});

mongoose.model('User', UserSchema);