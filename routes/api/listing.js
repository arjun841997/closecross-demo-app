const express = require('express');
const router = express.Router();
const rp = require('request-promise');

router.get('/listings/latest', (req, res) => {  
console.log("test")

  const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',    
    headers: {
      'X-CMC_PRO_API_KEY': 'dc15ade1-765d-48b5-bf78-4309f308f5b5'
    },
    json: true,
    gzip: true
  };

  rp(requestOptions).then(response => {
    console.log('API call response:', response);
    res.json(response);
  }).catch((err) => {
    console.log('API call error:', err.message);
    res.json({'error':true});
  });
});


module.exports = router;
