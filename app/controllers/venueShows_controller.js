/**
 * Created by Rob on 12/17/2014.
 */

var mongoose = require('mongoose'),
    VenueShow = mongoose.model('VenueShow');

exports.getShows = function (req, res) {

    VenueShow.find(function (err, venueShows) {
        if (err)
            res.send(err);

        res.json(venueShows);
    });

};
exports.getShow = function (req, res) {

    VenueShow.findById(req.params.venue_show_id, function (err, venue_show) {
        if (err)
            res.send(err);
        res.json(venue_show);
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

};

var Faker = require('Faker');

console.log(new Date())
console.log();

exports.addFakeVenueShows = function (req, res) {

    var Faker = require('Faker');

    for (var i = 0; i < 10; i++) {

        var show = new VenueShow({
            name: Faker.Lorem.sentence(),
            subtitle: Faker.Lorem.sentence(),
            descriptionShort: Faker.Lorem.paragraphs(3),
            descriptionLong: Faker.Lorem.paragraphs(10),
            date: Faker.Date.between(new Date(), Faker.Date.future(5))
        });

        show.save(function (err, results) {

            if (err) {
                res.json(500, "Failed to save Show.");
            } else {
                //res.json({msg: "Order Saved."})
            }
        });

    }

};






