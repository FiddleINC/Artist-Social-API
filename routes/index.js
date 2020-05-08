var express = require('express');
var google = require('google');
var cheerio = require('cheerio');
var chalk = require('chalk');
var router = express.Router();

var socials = {
	facebook: '',
	twitter: '',
	instagram: '',
	soundcloud: '',
	spotify: '',
	appleMusic: ''
};

var getSocials = (queryName, res) => {
	google.resultsPerPage = 25;
	google(queryName, function(err, response) {
		console.log(chalk.bgMagenta.black(`Searching Socials for ${queryName} `));
		if (err) console.error(err);
		var $ = cheerio.load(response.body);
		$('a').each((i, elem) => {
			const link = $(elem).attr('href').replace('/url?q=', '').split('&')[0];
			const domain = link
				.replace('http://', '')
				.replace('https://', '')
				.replace('www.', '')
				.split(/[/?#]/)[0]
				.replace('.com', '');
			switch (domain) {
				case 'facebook':
					if (socials.facebook == '') socials.facebook = link;
					break;
				case 'twitter':
					if (socials.twitter == '') socials.twitter = link.split('%')[0];
					break;
				case 'instagram':
					if (socials.instagram == '') socials.instagram = link.split('%')[0];
					break;
				case 'soundcloud':
					if (socials.soundcloud == '') socials.soundcloud = link;
					break;
				case 'open.spotify':
					if (socials.spotify == '') socials.spotify = link;
					break;
				case 'music.apple':
					if (socials.appleMusic == '') socials.appleMusic = link;
				default:
					break;
			}
		});
		res.json(socials);
	});
};

router.get('/', (req, res) => {
	getSocials(req.query.name, res);
	socials = {
		facebook: '',
		twitter: '',
		instagram: '',
		soundcloud: '',
		spotify: '',
		appleMusic: ''
	};
});

module.exports = router;
