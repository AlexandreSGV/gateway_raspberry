const axios = require('axios');


//exemplo GET
axios.get('http://127.0.0.1:8000/api/products/444')
  .then(function (response) {
    // handle success
    console.log(response.data.data.id);
    console.log(response.data.data.name);
    console.log(response.data.data.price);
    console.log(response.data.data.description);
  });

// EXEMPLO POST (criando um produto)
// axios.post('http://10.35.3.62:80/api/products', {
//     name: 'caneta Alexandre',
//     price: '5.2',
//     description: 'caneta bic'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   