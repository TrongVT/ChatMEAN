
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser')

//load employee route
var employee = require('./routes/employee'); 
var app = express();

var connection  = require('express-myconnection'); 
var mysql = require('mysql');

// all environments
app.set('port', process.env.PORT || 1235);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.json());
app.use( bodyParser.json() );
// app.use(express.urlencoded());
// app.use(express.methodOverride());

 app.use(express.static(path.join(__dirname, 'public')));

// // development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }
//Ket noi mysql
app.use(
    
    connection(mysql,{
        
        host: 'localhost',
        user: 'root',
        password : '',
        port : 3306, //port mysql
        database:'nhansu'

    },'pool') //or single

);

app.get('/', routes.index);
app.get('/employee',employee.list);
app.get('/employee/edit/:id',employee.edit);
app.post('/employee/edit/:id',employee.save_edit);

//app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
