module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

    app.get('/api', function(req, res) {
        // use mongoose to get all nerds in the database
//        Nerd.find(function(err, nerds) {
//
//            // if there is an error retrieving, send the error.
//            // nothing after res.send(err) will execute
//            if (err)
//                res.send(err);
//
//            res.json(nerds); // return all nerds in JSON format
//        });

        res.json({d:1}); // return all nerds in JSON format



    });

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/index', function(req, res) {
		res.sendfile('./public/index.html');
	});

};