const express = require('express');
const app = express();



app
.use(express.static(__dirname + '/'))
.get('/', (req, res) => {
  res.send('index');
})
.listen(80);