const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index');
const path = require('path')
const functionIndex = require('./js/index')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', indexRouter)

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})

module.exports = app
