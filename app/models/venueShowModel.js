/**
 * Created by Rob on 11/17/2014.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VenueShowSchema = new Schema({
    name:{ type: String, required:true },
    subtitle:{ type: String },
    descriptionShort:{ type: String, required:true },
    descriptionLong:{ type: String, required:true },
    date: { type: Date, required:true }
});

mongoose.model('VenueShow', VenueShowSchema);