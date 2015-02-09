var Stickshift = require('./src/index.js');
var cookie = require('cookie');

Stickshift(
  document.getElementById('page'),
  {
    endpoint: 'http://hey.mapbox.com/redshift/query',
    branch: 'db',
    username: 'mapbox',
    access_token: cookie.parse(document.cookie).access_token,
    repo: 'stickshift'
  });
