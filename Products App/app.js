const express = require('express');
const bodyParser = require('body-parser');

//Initialize our express app
const product = require('./routes/product.route'); //Imports routes for the products
const app = express();

//Dedicating a port number to listen to
let port = 1234;


//Setup mongoose connection
const mongoose = require('mongoose');
let dev_db_url = "mongodb+srv://Isaj:Me1234@isjtutorial-ow6tq.gcp.mongodb.net/test?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//app.use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

//app.listen
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});