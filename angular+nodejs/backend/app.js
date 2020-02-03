var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//cross

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "x-requested-with,Content-Type, Content-Length, Authorization, Accept");
	res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS, DELETE");
	res.header("Access-Control-Allow-Credentials", "true")
	if(req.method=="OPTIONS") res.send(200);
		else next();
});

var bodyParser = require('body-parser'); // Parse HTTP request body. 
app.use( bodyParser.json() );      // to support JSON-encoded bodies (create application/json jiexi).

app.get('/detail', function(req, res) {
	var inputLat = req.query.inputLat;
	var inputLon =req.query.inputLon;
	var inputTime = req.query.inputTime;
	var darkskyUrl_orign="https://api.darksky.net/forecast/d5062d78314026eaa99e5defc672c3ae/";
	darkskyUrl_orign+= inputLat+","+ inputLon+"," +inputTime;
	var darkskyUrl =encodeURI(darkskyUrl_orign);
	var request = require("request");
	request(darkskyUrl, function(error, response, body) {
	if(!error){
			var detail_obj= JSON.parse(body);
			res.json(detail_obj).end();
			console.log("Successfully getdetail!");
		}
		else{ return res.send("Error: noget ");}
	});
});

app.get('/autoComplete', function(req, res) {
	var inputCity = req.query.inputCity;
	var googleGeoUrl_orign="https://maps.googleapis.com/maps/api/place/autocomplete/json?input=";
	googleGeoUrl_orign += inputCity;
	googleGeoUrl_orign += "&types=(cities)&language=en&key=????????????????????xxxxxxx";
	var googleGeoUrl =encodeURI(googleGeoUrl_orign);
	var request = require("request");
	request(googleGeoUrl, function(error, response, body) {
	if(!error){
			var place_obj= JSON.parse(body);
			res.json(place_obj).end();
			console.log("Successfully getAutoComplete!");
		}
		else{ return res.send("Error: noget ");}
	});
});

app.get('/seal', function(req, res) {
	var inputState = req.query.inputState;
	var googleGeoUrl_orign="https://www.googleapis.com/customsearch/v1?q=";
	googleGeoUrl_orign += inputState;
	googleGeoUrl_orign += " State Seal&cx=010087039606304166579:6ewcnkzr19q&imgSize=huge&imgType=news&num=1&searchType=image&key=xxxxxxxxxxxxxxxxxxxxxx";
	console.log(googleGeoUrl_orign);
	var googleGeoUrl =encodeURI(googleGeoUrl_orign);
	var request = require("request");
	request(googleGeoUrl, function(error, response, body) {
	if(!error){
			var seal_obj= JSON.parse(body);
			res.json(seal_obj).end();
			console.log("Successfully getseal!");
		}
		else{ return res.send("Error: noget ");}
	});
});

app.get('/current', function(req, res) {
	var googleGeoUrl_orign="http://ip-api.com/json/";
	var googleGeoUrl =encodeURI(googleGeoUrl_orign);
	var request = require("request");
	request(googleGeoUrl, function(error, response, body) {
	if(!error){
			var seal_obj= JSON.parse(body);
			res.json(seal_obj).end();
			console.log("Successfully getcurrent!");
		}
		else{ return res.send("Error: noget ");}
	});
});

app.get('/curforcast', function(req, res) {
	var lat=req.query.lat;
	var lng =req.query.lng;
	var forecastUrl_orign="https://api.forecast.io/forecast/d5062d78314026eaa99e5defc672c3ae/"+encodeURI(lat+","+lng);
	var forecastUrl =encodeURI(forecastUrl_orign);

	var request = require("request");
	request(forecastUrl, function(error, response, body) {
	if(!error){
			var forecast_obj= JSON.parse(body);
			res.json(forecast_obj).end();
			console.log("Successfully getforecast_obj!");
		}
		else{ return res.send("Error: noget ");}
	});
});

app.get('/location', function(req, res) {
	var street = req.query.street;
	var city = req.query.city;
	var state = req.query.state;
	var address= ""+ street+ ","+ city +"," +state;
	var googleGeoUrl_orign="https://maps.googleapis.com/maps/api/geocode/json?address="+ address+ "&key=w";
	var googleGeoUrl =encodeURI(googleGeoUrl_orign);
	var lat="";
	var lng ="";

	//Using Request Module to get latitude and longtitude
	var request = require("request");
	request(googleGeoUrl, function(error, response, body) {
	if(!error && JSON.parse(body).status=="OK"){
		var geo_obj= JSON.parse(body);
		lat = geo_obj.results[0].geometry.location.lat;
		lng = geo_obj.results[0].geometry.location.lng;
		var forecastUrl_orign = "https://api.forecast.io/forecast/d5062d78314026eaa99e5defc672c3ae/"+encodeURI(lat+","+lng);
		var forecastUrl = encodeURI(forecastUrl_orign);
		console.log("forecastUrl:"+forecastUrl);
		//Using Request Module to get json about weather info
		request(forecastUrl, function(error, response, body) {
		if(!error){
			var forecast_obj= JSON.parse(body);
			res.json(forecast_obj).end();
			console.log("Successfully getWeather!");
		}
		else{ return res.send("Error: getGeocode ");}
		});
	}
	else{ return res.send("Error: getGeocode ");}
	});

	
	/*	console.log(city);
	console.log(state);
	console.log(street);
	console.log("address:"+address);
	console.log("googleGeoUrl"+googleGeoUrl);*/
	/*res.send('<h1>city</h1>'+city);*/
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
