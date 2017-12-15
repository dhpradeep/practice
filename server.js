const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT | 8080;

//set static path
app.use(express.static(path.join(__dirname, 'public')));

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	res.send('index');
});

app.get('/link', (req, res) => {
	res.render('link', {
		title: 'this is title'
	});
});

app.listen(port, (req, res) => {
    console.log("Server is running in port: " + port);
});