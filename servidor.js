var express = require('express');
const axios = require('axios');
var app = express();


app.get('/verproduto/', function (req, res) {
  
	var id = req.query.id;
  axios.get('http://127.0.0.1:8000/api/products/'+id)
  .then(function (response) {

    var dados = response.data.data;
  
  	res.send(
  		"ID "+ dados.id +"<br>"+
  		"NAME "+ dados.name +"<br>"+
  		"PRICE "+ dados.price +"<br>"+
  		"DESCRIPTION "+ dados.description +"<br>"

  		);
  	});
});


app.get('/viewproduct', function (req, res) {
  res.sendFile(__dirname + '/view.html');
  
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});