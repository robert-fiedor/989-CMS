var crypto = require('crypto');
var express = require('express');
var _ = require('underscore');

var baseAppSettings = require('./../config/BaseAppSettings');
var accessControlList = require('../app/AccessControlList');


module.exports = function (app) {

    var users = require('./../controllers/users_controller');

    app.post('/signup', users.signup);
    app.post('/user/update', users.updateUser);
    app.post('/user/delete', users.deleteUser);
    app.post('/login', users.login);

    //shortcut to server route config
    var shortS = baseAppSettings.routes.server;
    //shortcut to client route config
    var shortC = baseAppSettings.routes.client;

    //user
    app.get(shortS.get.user.urlRequested, function (req, res) {
        if (req.session.user) {
            res.render(shortS.get.user.pathToFile, {msg: req.session.msg});
        } else {
            req.session.msg = 'Access denied!';
            res.redirect(shortS.get.login.urlRequested);
        }
    });

    //login
    app.get(shortS.get.login.urlRequested, function (req, res) {

        if (req.session.user) {
            res.redirect(shortS.get.home.urlRequested);
        } else {
            res.render(shortS.get.login.pathToFile, {msg: req.session.msg});
        }

    });

    //logout
    app.get(shortS.get.logOut.urlRequested, function (req, res) {
        req.session.destroy(function () {
            res.redirect(shortS.get.login.urlRequested);
        });
    });

    //signup
    app.get(shortS.get.signUp.urlRequested, function (req, res) {
        if (req.session.user) {
            res.redirect(shortS.get.home.urlRequested);
        } else {
            res.render(shortS.get.signUp.pathToFile, {msg: req.session.msg});
        }
    });

    app.get(shortS.get.user.profile.urlRequested, users.getUserProfile);

    //client routes
    //map each client route to index since that's where angular will kick in
    _.each(baseAppSettings.routes.client, function (val) {

        app.get(val.urlRequested, function (req, res) {
            res.render(shortS.get.home.pathToFile);

            accessControlList.acl.userRoles(req.session.user.toString(), function (err, roles) {
                console.log('here here &&&&', roles);
            });

        });

    });

    app.all('/*', function (req, res, next) {
        res.render(shortS.get.home.pathToFile)
    });

    var checkPermissions = function () {


    };

};


//var Nerd = require('./models/nerd');


//
//
//
//
//
//
//app.get('/api/nerds', function (req, res) {
//    // use mongoose to get all nerds in the database
//    Nerd.find(function (err, nerds) {
//
//        // if there is an error retrieving, send the error.
//        // nothing after res.send(err) will execute
//        if (err)
//            res.send(err);
//
//        res.json(nerds); // return all nerds in JSON format
//    });
//
////        res.json({d:1}); // return all nerds in JSON format
//
//
//});
//
//app.post('/api/nerds', function (req, res) {
//
//    var nerd = new Nerd();
//    nerd.address = {
//        name: 'bobitto',
//        address: 'sjsjksl',
//        city: 'warsaw',
//        state: 'ny',
//        date: Date.now(),
//        zip: 'ssss'
//    };
//    //nerd.address='jkl';
//
//    //console.log('req',req);
//
//
//    nerd.save(function (err) {
//        if (err)
//            res.send(err);
//
//        res.json({message: 'nerd created!'});
//    });
//
//});


//dont delete
//app.all('/*', function(req, res, next) {
//    // Just send the index.html for other files to support HTML5Mode
//    //res.sendfile('index.html', { root: __dirname });
//    res.render('index');
//
//});


//app.get('/przekier/:name', function(req, res){
//    res.render('index');
//});

//app.get('/', function (req, res) {
//    res.render('index');
//});