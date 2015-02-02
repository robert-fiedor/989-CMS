/**
 * Created by Rob on 11/17/2014.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PhotoshopSchema = new Schema({
    name: {type: String, required: true},
    layers:{type:[], required:true}
});

mongoose.model('Photoshop', PhotoshopSchema);