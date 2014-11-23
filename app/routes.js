var crypto = require('crypto');
var express = require('express');

var Nerd = require('./models/nerd');

module.exports = function (app) {

    var users = require('./../controllers/users_controller');

    app.get('/przekier/:name', function(req, res){
        res.render('index');
    });

    app.get('/', function (req, res) {
        res.render('index');
        //res.redirect('/login');
    });

    app.get('/user', function (req, res) {
        if (req.session.user) {
            res.render('user', {msg: req.session.msg});
        } else {
            req.session.msg = 'Access denied!';
            res.redirect('/login');
        }
    });
    app.get('/signup', function (req, res) {
        if (req.session.user) {
            res.redirect('/');
        }
        res.render('signup', {msg: req.session.msg});
    });
    app.get('/login', function (req, res) {
        if (req.session.user) {
            res.redirect('/');
        }
        res.render('login', {msg: req.session.msg});
    });
    app.get('/logout', function (req, res) {
        req.session.destroy(function () {
            res.redirect('/login');
        });
    });

    app.post('/signup', users.signup);
    app.post('/user/update', users.updateUser);
    app.post('/user/delete', users.deleteUser);
    app.post('/login', users.login);
    app.get('/user/profile', users.getUserProfile);

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    app.get('/api/nerds', function (req, res) {
        // use mongoose to get all nerds in the database
        Nerd.find(function (err, nerds) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(nerds); // return all nerds in JSON format
        });

//        res.json({d:1}); // return all nerds in JSON format


    });

    app.post('/api/nerds', function (req, res) {

        var nerd = new Nerd();
        nerd.address = {
            name: 'bobitto',
            address: 'sjsjksl',
            city: 'warsaw',
            state: 'ny',
            date: Date.now(),
            zip: 'ssss'
        };
        //nerd.address='jkl';

        //console.log('req',req);


        nerd.save(function (err) {
            if (err)
                res.send(err);

            res.json({message: 'nerd created!'});
        });

    });















}