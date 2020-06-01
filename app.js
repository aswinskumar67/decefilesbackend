const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cookieParser = require("cookie-parser");

require('dotenv/config');
const app = express();
app.use(cookieParser());
app.use(bodyparser.json());

//routes import
const authRoute = require('./routes/auth.js');

const myfilesRoute = require('./routes/myfiles');

app.use('/myfiles',myfilesRoute);


//middleware
app.get('/',(req,res) => {
    res.send("We are on home");

});
app.use('/user',authRoute);





//connect to db
mongoose.connect(process.env.DB_CONNECT ,
 { useNewUrlParser: true, useUnifiedTopology: true },() => 
    console.log('Connected')
)

//LISTEN on port 3000
app.listen(3000);
