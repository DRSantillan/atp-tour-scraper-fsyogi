import https from 'https';
import jsdom from 'jsdom';
import { JSDOM } from 'jsdom';

const url =
	'https://www.atptour.com/en/rankings/singles?rankDate=2022-01-17&rankRange=0-2';

const req = https.request(url, res => {
	//
	let htmlData = '';
	res.on('data', chunk => {
		htmlData += chunk;
	});
	//
	res.on('end', () => {
		const dom = new JSDOM(htmlData).window.document;
		const playerTRows = dom.querySelectorAll(
			'#player-rank-detail-ajax >tbody > tr'
		);
		const playersArray = [];

		playerTRows.forEach(item => {
			const rank = item.querySelector('.rank-cell');
			const name = item.querySelector('.player-cell-wrapper > a');
			const age = item.querySelector('.age-cell');
			const flag = item.querySelector('.country-item > img');
			const points = item.querySelector('.points-cell');
			const tournamentsPlayed = item.querySelector('.tourn-cell > a');
			playersArray.push({
				name: name ? name.textContent.trim() : null,

				personalbio: {
					country: '',
					countryabbreviated: flag.alt ? flag.alt.trim() : null,
					flag: flag.src ? flag.src.trim() : null,
					age: age ? age.textContent.trim() : null,
					birthplace: '',
					birthdate: '',
					height: '',
					weight: '',
					image: '',
					socialmedia: [
						{ facebook: '' },
						{ twitter: '' },
						{ instagram: '' },
						{ youtube: '' },
						{ web: '' },
						{ topcourt: '' },
					],
				},
				tennisbio: {
					url: name.href ? name.href.trim() : null,
					rank: rank ? rank.textContent.trim() : null,
					turnedpro: null,
					plays: '',
					coach: [],
					prizemoney: 0,
					points: points ? points.textContent.trim() : null,
					tournamentsPlayed: tournamentsPlayed
						? tournamentsPlayed.textContent.trim()
						: null,
				},
			});
		});

		const players = {
			playersArray,
		};
		console.log(players.playersArray)
		
	});
});

req.end();


