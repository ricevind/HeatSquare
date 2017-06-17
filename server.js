const express = require('express');
const path = require('path');
// const sslRedirect = require('heroku-ssl-redirect');

const app = express();

// app.use(sslRedirect());
app.use(express.static(__dirname + '/dist'));
// app.get('/variables.js', function(req, res) {
//   if (process.env.API_URL) {
//     res.send("var variables = { 'API_URL':'" + process.env.API_URL+ "'}");
//   } else {
//     res.send("var variables = { 'a':'a'}");
//   }
// });
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});



app.listen(process.env.PORT || 8080);
