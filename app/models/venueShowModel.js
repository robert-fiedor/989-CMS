/**
 * Created by Rob on 11/17/2014.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VenueShowSchema = new Schema({
    name:'string'
});

mongoose.model('VenueShow', VenueShowSchema);