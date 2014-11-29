var crypto = require('crypto');
var express = require('express');

var Nerd = require('./models/nerd');

var baseAppSettings = require('./../config/BaseAppSettings');

module.exports = function (app) {

    var users = require('./../controllers/users_controller');

    app.post('/signup', users.signup);
    app.post('/user/update', users.updateUser);
    app.post('/user/delete', users.deleteUser);
    app.post('/login', users.login);

    //home
    //app.get(baseAppSettings.routes.server.get.user.urlRequested, function (req, res) {
    //    if (req.session.user) {
    //        res.render(baseAppSettings.routes.server.get.user.pathToFile, {msg: req.session.msg});
    //    } else {
    //        req.session.msg = 'Access denied!';
    //        res.redirect('/login');
    //    }
    //});

    var shortC = baseAppSettings.routes.server;

    //user
    app.get(shortC.get.user.urlRequested, function (req, res) {
        if (req.session.user) {
            res.render(shortC.get.user.pathToFile, {msg: req.session.msg});
        } else {
            req.session.msg = 'Access denied!';
            res.redirect('/login');
        }
    });

    //login
    app.get(shortC.get.login.urlRequested, function (req, res) {

        if (req.session.user) {
            res.redirect('/home');
        } else {
            res.render(shortC.get.login.pathToFile, {msg: req.session.msg});
        }

    });

    //logout
    app.get(shortC.get.logOut.urlRequested, function (req, res) {
        req.session.destroy(function () {
            res.redirect(shortC.get.login.urlRequested);
        });
    });

    //signup
    app.get(shortC.get.signUp.urlRequested, function (req, res) {
        if (req.session.user) {
            res.redirect(shortC.get.home.urlRequested);
        } else {
            res.render(shortC.get.signUp.pathToFile, {msg: req.session.msg});
        }
    });

    app.get('/user/profile', users.getUserProfile);

    app.get(baseAppSettings.routes.client.home.url, function (req, res) {
        res.render('index');
    });

    app.get(baseAppSettings.routes.client.list.url, function (req, res) {
        res.render('index');
    });

    app.all('/*', function (req, res, next) {
        res.render('index');
    });

};

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