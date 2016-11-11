const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app
.use(express.static(__dirname + '/'))
.get('/', (req, res) => {
  res.render('index');
})
.listen(app.get('port'));