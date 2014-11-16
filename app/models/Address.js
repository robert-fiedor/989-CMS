/**
 * Created by Rob on 11/16/2014.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    date: {type: Date, default: Date.now()}
}, {_id: false});

module.exports = AddressSchema;
