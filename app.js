const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const session = require('express-session')
const morgan = require('morgan')
require('dotenv/config');
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','https://localhost:3000')
     // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Headers','Content-Type')
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
});

app.use(morgan('dev'))
/*app.use(session ({secret: process.env.TOKEN,
resave: false,
saveUninitialized: true}) )  */
//routes import
const authRoute = require('./routes/auth.js');

const myfilesRoute = require('./routes/myfiles');


app.use('/myfiles',myfilesRoute);


//middleware
app.get('/',(req,res) => {
    res.header()
    res.send("hello")

});
app.use('/user',authRoute);



//connect to db
mongoose.connect(process.env.DB_CONNECT ,
 { useNewUrlParser: true, useUnifiedTopology: true },() => 
    console.log('Connected')
)

//LISTEN on port 3000

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('bin/56327335_localhost.key', 'utf8');
var certificate = fs.readFileSync('bin/56327335_localhost.cert', 'utf8');

var credentials = {key: privateKey, cert: certificate};

// your express configuration here

var httpServer = http.createServer(app);
var secureServer = https.createServer(credentials, app);


secureServer.listen(8080);
