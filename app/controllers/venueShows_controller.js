/**
 * Created by Rob on 12/17/2014.
 */

var mongoose = require('mongoose'),
    VenueShow = mongoose.model('VenueShow');

exports.getShow = function (req, res) {

    VenueShow.find(function (err, venueShows) {
        if (err)
            res.send(err);

        res.json(venueShows);
    });

};

exports.addShow = function (req, res) {

    var show = new VenueShow({
        name: 'this is it'
    });

    show.save(function (err, results) {
        if (err) {
            res.json(500, "Failed to save Order.");
        } else {
            res.json({msg: "Order Saved."})
        }

    });

}




