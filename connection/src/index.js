const app = require('./config/server'); //call my server

require('./app/routes/inventory')(app); //Call to inventory and send information

app.listen(app.get('port'), ()=>{
    console.log(`Server at the port ${app.get('port')}`);
});

