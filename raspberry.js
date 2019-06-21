var express = require('express');
const axios = require('axios');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//post recebe identificador do termometo e valor da temperatura
app.post('/raspberry/api/temperatures/', function (req, res) {
  
  // Pegando os paramentos recebidos pelo metodo post
  var thermometer_id = req.body.thermometer_id;
  var value = req.body.value;
  var ip = req.connection.remoteAddress;

  //registrando informacoes recebidas na console
  console.log(ip, " enviou thermometer_id = " , thermometer_id  , " e  value = ", value ); 

  //enviando request ao Laravel
  axios.post('http://10.35.3.62:8000/api/temperatures/', {
    thermometer_id: thermometer_id,
    value: value 
  })
  .then(function (response) {
    console.log(response.data.data);
  })
  
  res.send("Raspberry: recebi sua temperatura e enviei ao laravel com sucesso!");
});





app.post('/raspberry/api/luminosities/', function (req, res) {
  
  // Pegando os paramentos recebidos pelo metodo post
  var sensor_id = req.body.sensor_id;
  var value = req.body.value;
  var ip = req.connection.remoteAddress;

  //registrando informacoes recebidas na console
  console.log(ip, " enviou sensor_id = " , sensor_id  , " e  value = ", value ); 

  //enviando request ao Laravel
  axios.post('http://10.35.3.62:8000/api/luminosities/', {
    sensor_id: sensor_id,
    value: value 
  })
  .then(function (response) {
    console.log(response.data.data);
  })
  
  res.send("Raspberry: recebi sua luminosidade e enviei ao laravel com sucesso!");
});



app.listen(3000, function () {
  console.log('Raspberry: Gateway da casa inteligente online na porta 3000...');
});
