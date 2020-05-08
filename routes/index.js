var express = require('express');
var fs = require('fs');
var marked = require('marked');
var showdown = require('showdown');
var router = express.Router();

router.get('/', (req, res) => {
	//res.send('This is a Artist Social API');
	var readMe = fs.readFileSync('README.md', 'utf-8');
	var markdownReadMe = marked(readMe);
	res.send(markdownReadMe);
});

module.exports = router;
