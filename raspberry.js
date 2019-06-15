var express = require('express');
const axios = require('axios');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/api/temperatures/', function (req, res) {
  
  // Pegando os paramentos recebidos pelo metodo post
  var thermometer_id = req.body.thermometer_id;
  var value = req.body.value;
  
  //enviando request ao Laravel
  axios.post('http://127.0.0.1:8000/api/temperatures/', {
    thermometer_id: thermometer_id,
    value: value 
  })
  .then(function (response) {
    console.log(response);
  })


  console.log(thermometer_id);
  console.log(value);
  res.send("Temperatura enviada com sucesso!");
});

app.listen(3000, function () {
  console.log('Gateway casa inteligente online...');
});