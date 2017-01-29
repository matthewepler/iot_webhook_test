var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use( bodyParser.urlencoded({
		extended: true,
		type: '*/x-www-form-urlencoded'
	})
)

app.get('/', function (req, res) {
  res.send('I hear ya!')
})

app.post('/', function(req, res) {
	console.log(req.body)
	if(req.body) {
		res.send("post received");
	} else {
		res.send("body undefined or empty")
	}
})

app.listen(80, function () {
  console.log('app running')
})
