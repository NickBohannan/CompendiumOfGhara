const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index');
const path = require('path')
const Entry = require('./models/index')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000

app.set('port', port)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', indexRouter)

app.listen(port, () => {
    console.log("Server listening on port " + port)
})

Entry.sync()

module.exports = { app, port }
