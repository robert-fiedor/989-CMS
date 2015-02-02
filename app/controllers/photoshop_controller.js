/**
 * Created by Rob on 12/17/2014.
 */

var mongoose = require('mongoose'),
    Photoshop = mongoose.model('Photoshop');

exports.getShows = function (req, res) {

    Photoshop.find(function (err, photoshop) {
        if (err)
            res.send(err);

        res.json(photoshop);
    });

};
//};
//exports.getShow = function (req, res) {
//
//    Photoshop.findById(req.params.venue_show_id, function (err, photoshop) {
//        if (err)
//            res.send(err);
//        res.json(photoshop);
//    });
//
//};
exports.addShow = function (req, res) {

    var show = new Photoshop({
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
//
//var Faker = require('Faker');
//
//console.log(new Date())
//console.log();
//
//exports.addFakePhotoshops = function (req, res) {
//
//    var Faker = require('Faker');
//
//    for (var i = 0; i < 10; i++) {
//
//        var show = new Photoshop({
//            name: Faker.Lorem.sentence(),
//            subtitle: Faker.Lorem.sentence(),
//            descriptionShort: Faker.Lorem.paragraphs(3),
//            descriptionLong: Faker.Lorem.paragraphs(10),
//            date: Faker.Date.between(new Date(), Faker.Date.future(5))
//        });
//
//        show.save(function (err, results) {
//
//            if (err) {
//                res.json(500, "Failed to save Show.");
//            } else {
//                //res.json({msg: "Order Saved."})
//            }
//        });
//
//    }
//
//};






