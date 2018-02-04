var mysql = require('mysql');
var database_name = "Employees";
var table = "EMPDetails";
var express = require("express");
var user_name = "root";
var host_details = "129.144.148.66";
var Password_details = "Password123_#";

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views')


var con = mysql.createConnection({
  host: host_details,
  user: user_name,
  password: Password_details,
  database: database_name
});


// connection funcntion
con.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("error")
}
});


/*
// if wanna just demo simple table
app.get("/",function(req,res){
	con.query("Select * from EMPDetails", function(err, rows, fields) {
	
	  if (!err){
		var response = '';
		rows.forEach(function(row){
			response += '<tr>' + '<td>'+row.id+ '</td>' + '<td>'+ row.name + '</td>'  + '</tr>';

		});
		response ='<table border="1"><tr><th>ID.</th><th>Name</th></tr>'+ response +'</table>';
		res.send(response);

	  }else{
	    console.log('Error while performing Query.');
	  }});
});
*/

app.get("/",function(req,res){
	con.query("Select * from EMPDetails", function(err, rows, fields) {
	
	  if (!err){

		res.render('home', {employeeList: rows });

	  }else{
	    console.log('Error while performing Query.');
	  }});
});

// if wanna just demo simple table with css
app.get("/data",function(req,res){
	con.query("Select * from EMPDetails", function(err, rows, fields) {
	
	  if (!err){
	    //console.log('The solution is: ', rows);
		//res.send(rows);
		res.json(rows);

	  }else{
	    console.log('Error while performing Query.');
	  }});
});

app.listen(3000);


