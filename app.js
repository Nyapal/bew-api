const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send('hello')
})

// app.get('/', (req, res) {
//     res.send('hey')
// })
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('App listening on port 3000!')
  const db = process.env.MONGODB_URI || 'mongodb://localhost/test-api';
  mongoose.connect(db , { useNewUrlParser: true })
})

module.exports = app