// grab the mongoose module

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AddressSchema = new Schema({
    //name: String,
    address: String
    //city: String,
    //state: String,
    //zip: String
}, {_id: false});


var NerdSchema = new Schema({
    name: {type: String, default: 'bydlo'},
    address: [AddressSchema]
});

module.exports = mongoose.model('Nerd', NerdSchema);

//var ProductSchema = new Schema({
//    name: String,
//    imagefile: String,
//    description: String,
//    price: Number,
//    instock: Number
//});
//mongoose.model('Product', ProductSchema);


// define our nerd model
// module.exports allows us to pass this to other files when it is called


//module.exports = mongoose.model('Nerd', {
//    name: {type: String, default: ''},
//    address: [AddressSchema]
//});

//module.exports = mongoose.model('Game', {
//    name: {type: String, default: ''}
//});