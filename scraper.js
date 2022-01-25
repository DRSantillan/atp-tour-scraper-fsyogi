import { table } from 'console';
import https from 'https';
import jsdom from 'jsdom';
import { JSDOM } from 'jsdom';

const url =
	'https://www.atptour.com/en/rankings/singles?rankDate=2022-01-17&rankRange=0-4';

const req = https.request(url, res => {
	//
	let htmlData = '';
	const playerData = {};
	const trArr = [];
	res.on('data', chunk => {
		//console.log(`Data chunk: ${chunk}`);
		htmlData += chunk;
	});
	//
	res.on('end', () => {
		const dom = new JSDOM(htmlData).window.document;

		const playerTRows = dom.querySelector('tbody');
		const trows = playerTRows.querySelectorAll('td');

		const playerData = {};
			trows.forEach(td => {
				
				switch (td.getAttribute('class')) {
					case 'rank-cell':
						console.log(td.textContent.trim());
                    
						break;
					case 'move-cell':
						console.log(td.nextElementSibling.textContent.trim());
						break;
					case 'country-cell':
						console.log(
							td
								.querySelector('.country-inner > div > img')
								.src.trim()
						);
						console.log(
							td
								.querySelector('.country-inner > div > img')
								.alt.trim()
						);
						break;
					case 'player-cell':
						console.log(td.textContent.trim());
						console.log(
							td
								.querySelector('.player-cell-wrapper > a')
								.href.trim()
						);
						break;
					case 'age-cell':
						console.log(td.textContent.trim());
						break;
					case 'points-cell':
						console.log(td.textContent.trim());
						break;
					case 'tourn-cell':
						console.log(td.textContent.trim());
						break;
					case 'pts-cell':
						console.log(td.textContent.trim());
						break;
					case 'next-cell':
						console.log(td.textContent.trim());
                        console.log('------------------------------')
						break;
				}
			})
            
	;
		//.forEach(link => {
		// 	console.log(link);
		// });

		// arrTableRow.forEach(item => {
		// 	item.querySelectorAll('tr').forEach(tableRows => {

		// 		tableRows.querySelectorAll('td').forEach(data => {

		// 		});
		// 	});
		// });
		// dom.window.document
		// 	.querySelectorAll('.player-cell-wrapper a')
		// 	.forEach(link => {
		// 		console.log(link.href.trim());
		// 	});

		// dom.window.document.querySelectorAll('.age-cell').forEach(link => {
		// 	console.log(link.textContent.trim());
		// });
		// fs.writeFile('ranking.html', htmlData, err => {
		// 	if (err) {
		// 		console.log(err);
		// 	} else {
		// 		//console.log('file was written');
		// 		// fs.readFileSync('ranking.html', 'utf-8');
		// 		// const dom = new JSDOM(htmlData);
		// 		// dom.window.document
		// 		// 	.querySelectorAll('.player-cell-wrapper a')
		// 		// 	.forEach(link => {
		// 		// 		console.log(link.textContent);
		// 		// 	});
		// 	}
		// });
		//console.log(htmlData);

		//console.log('No more data.');
	});
});
// .end() function is required to begin the above request.
req.end();
