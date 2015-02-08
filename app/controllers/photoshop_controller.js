/**
 * Created by Rob on 12/17/2014.
 */

var mongoose = require('mongoose'),
    Photoshop = mongoose.model('Photoshop');

exports.createFile = function (req, res) {
    var show = new Photoshop({name:req.body.name});
    show.save(function (err, results) {
        if (err) {
            res.json(500, "Failed create File.");
        } else {
            res.json({msg: "File created", file: results})
        }
    });
};

exports.getFiles = function (req, res) {
    Photoshop.find(function (err, photoshop) {
        if (err)
            res.send(err);
        res.json(photoshop);
    });
};

exports.getFile = function (req, res) {
    Photoshop.findById(req.params.id, function (err, photoshop) {
        if (err)
            res.send(err);
        res.json(photoshop);
    });
};

exports.updateFile = function(req, res){
    Photoshop.update({ _id: req.params.id },
        {$set:req.body})
        .exec(function(err, results){
            if (err ){
                res.json(404, {msg: 'Failed to update Cart.'});
            } else {
                res.json({msg: "Customer Cart Updated"},results);
            }
        });
};




















































//};


//exports.updateShipping = function(req, res){
//    var newShipping = new Address(req.body.updatedShipping);
//    Customer.update({ userid: 'customerA' },
//        {$set:{shipping:[newShipping.toObject()]}})
//        .exec(function(err, results){
//            if (err || results < 1){
//                res.json(404, {msg: 'Failed to update Shipping.'});
//            } else {
//                res.json({msg: "Customer Shipping Updated"});
//            }
//        });
//};
//exports.updateBilling = function(req, res){
//    // This is where you could verify the credit card information
//    // and halt the checkout if it is invalid.
//    var newBilling = new Billing(req.body.updatedBilling);
//    Customer.update({ userid: 'customerA' },
//        {$set:{billing:[newBilling.toObject()]}})
//        .exec(function(err, results){
//            if (err || results < 1){
//                res.json(404, {msg: 'Failed to update Billing.'});
//            } else {
//                res.json({msg: "Customer Billing Updated"});
//            }
//        });
//};


//exports.updateFile = function (req, res) {
//
//    Photoshop.findById(req.params.id, function (err, photoshop) {
//        if (err)
//            res.send(err);
//        res.json(photoshop);
//    });
//
//};


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






