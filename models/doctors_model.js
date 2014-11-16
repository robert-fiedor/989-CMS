var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AddressSchema = new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String
}, {_id: false});

mongoose.model('Address', AddressSchema);

var BillingSchema = new Schema({
    cardtype: {type: String, enum: ['Visa', 'MasterCard', 'Amex']},
    name: String,
    number: String,
    expiremonth: Number,
    expireyear: Number,
    address: [AddressSchema]
}, {_id: false});


mongoose.model('Product', ProductSchema);

var ProductQuantitySchema = new Schema({
    quantity: Number,
    product: [ProductSchema]
}, {_id: false});


var PatientSchema = new Schema({
    Patientid: {type: String, unique: true, required: true},
    billing: [BillingSchema],
    cart: [ProductQuantitySchema]
});


mongoose.model('Patient', CustomerSchema);