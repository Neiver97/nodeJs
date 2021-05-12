//modules

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express(); // server init 

//Where is file
app.use(express.static('src'));

//Port config
app.set('port', process.env.PORT || 4041);

//config plants

app.set('view engine', 'ejs');

//views
app.set('views', path.join(__dirname, '../app/views'));

//body-parser config (middleware)
app.use(bodyParser.urlencoded({extended:false}));

module.exports=app;