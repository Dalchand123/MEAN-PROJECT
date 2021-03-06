const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
   
console.log('balle balle'+config.database);

});

mongoose.connection.on('error',(err)=>{
   
console.log('Database error'+err);

});

const app = express();

const users = require('./routes/users');

app.use(cors());

app.use(express.static(path.join(__dirname,'public'))); 

app.use(bodyParser.json());
app.use('/users',users);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.get('/',(req, res)=>{
    res.send("Invalid endpoint");
});
const port =3000;
app.listen(port, () =>{
    console.log("server starts at port 3000");
    console.log("dc is the best Engineer");

})
