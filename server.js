





// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var router = express.Router();

var path = require('path');

require('./models/users_model.js');

var baseAppSettings = require('./config/baseappsettings');




//app.prelo = 'klkl';

//app.locals({
//    title: 'Extended Express Example'
//});




var mongoStore = require('connect-mongo')({session: expressSession});

// configuration ===========================================
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

var acl = require('acl');

mongoose.connection.on('connected', function() {
    acl = new acl(new acl.mongodbBackend(mongoose.connection.db,'Collections'));

    acl.addUserRoles('546c1530f66698742348eb55', 'guest', function(err){
        console.log('** potential', err)
    });

    acl.userRoles( '546c1530f66698742348eb55', function(err, roles){
        console.log('roles',roles)
    } );

});




// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT

app.engine('.html', require('ejs').__express);

app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.use(cookieParser());

app.use(expressSession({

    secret: 'SECRET',
    cookie: {maxAge: 60*60*1000},
    store: new mongoStore({
        db: mongoose.connection.db,
        collection: 'sessions'
    }),
    saveUninitialized: true,
    resave: true
}));


app.use(function(req, res, next) {
    res.locals.baseAppSettings = baseAppSettings;
    next();
});


require('./app/routes')(app); // pass our application into our routes



// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app