var Nerd = require('./models/nerd');

module.exports = function (app) {

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
            name: 'aasassaas',
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


//    .post(function(req, res) {
//
//        var bear = new Bear(); 		// create a new instance of the Bear model
//        bear.name = req.body.name;  // set the bears name (comes from the request)
//
//        // save the bear and check for errors
//        bear.save(function(err) {
//            if (err)
//                res.send(err);
//
//            res.json({ message: 'Bear created!' });
//        });


    // frontend routes =========================================================
    // route to handle all angular requests
    //app.get('/index', function (req, res) {
    //    res.sendfile('./public/index.html');
    //});

};