const player = {
	name: '',
	url: '',
	personalbio: {
		country: '',
		flag: '',
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
        rank: 0,
		turnedpro: null,
		plays: '',
		coach: [],
		prizemoney: 0,
	},
};

url =
	'https://www.atptour.com/en/rankings/singles?rankDate=2022-01-17&rankRange=201-300';
atpurls =  [
		{ title: 'Overview', urlpostfix: 'overview' },
		{ title: 'Bio', urlpostfix: 'bio' },
		{ title: 'Activity', urlpostfix: 'player-activity' },
		{ title: 'Win / Loss', urlpostfix: 'fedex-atp-win-loss' },
		{ title: 'Titles & Finals', urlpostfix: 'titles-and-finals' },
		{ title: 'Player Stats', urlpostfix: 'player-stats' },
		{ title: 'Ranking History', urlpostfix: 'rankings-history' },
		{ title: 'Ranking Breakdown', urlpostfix: 'rankings-breakdown' },
	],


    // winlossstats: {
	// 		matchrecord: [
	// 			{
	// 				overall: {
	// 					win: 0,
	// 					loss: 0,
	// 					careerindex: 0,
	// 					titles: 0,
	// 				},
	// 			},
	// 			{
	// 				grandslams: {
	// 					win: 0,
	// 					loss: 0,
	// 					careerindex: 0,
	// 					titles: 0,
	// 				},
	// 			},
	// 			{
	// 				atpmasters1000: {
	// 					win: 0,
	// 					loss: 0,
	// 					careerindex:0,
	// 					titles: 0,
	// 				},
	// 			},
	// 		],
	// 		pressurepoints: [
	// 			{
	// 				tiebreaks: {
	// 					win: 274,
	// 					loss: 153,
	// 					index: 0.642,
	// 				},
	// 			},
	// 			{
	// 				toptenwins: {
	// 					win: 229,
	// 					loss: 104,
	// 					index: 0.688,
	// 				},
	// 			},
	// 			{
	// 				finals: {
	// 					win: 85,
	// 					loss: 37,
	// 					index: 0.697,
	// 				},
	// 			},
	// 			{
	// 				decidingset: {
	// 					win: 194,
	// 					loss: 72,
	// 					index: 0.729,
	// 				},
	// 			},
	// 			{
	// 				fifthsetrecord: {
	// 					win: 36,
	// 					loss: 10,
	// 					index: 0.783,
	// 				},
	// 			},
	// 		],
	// 		environment: [
	// 			{ clay: { win: 0, loss: 0, index: 0, titles: 0 } },
	// 			{ grass: { win: 0, loss: 0, index: 0, titles: 0 } },
	// 			{ hard: { win: 0, loss: 0, index: 0, titles: 0 } },
	// 			{ carpet: { win: 0, loss: 0, index: 0, titles: 0 } },
	// 			{ indoor: { win: 0, loss: 0, index: 0, titles: 0 } },
	// 			{ outdoor: { win: 0, loss: 0, index: 0, titles: 0 } },
	// 		],
	// 		otherdata: [
	// 			{ afterwinningfirst: { win: 0, loss: 0, index: 0 } },
	// 			{ afterlosingfirst: { win: 0, loss: 0, index: 0 } },
	// 			{ againstrighthanders: { win: 0, loss: 0, index: 0 } },
	// 			{ againstlefthanders: { win: 0, loss: 0, index: 0 } },
	// 		],
	// 	},
	// 	careertitles: [
	// 		{
	// 			year: 2021,
	// 			titles: [
	// 				{
	// 					name: 'ATP Masters 1000 Paris ',
	// 					surface: '(Indoor/Hard)',
	// 				},
	// 				{
	// 					name: 'ATP Masters 1000 Paris ',
	// 					surface: '(Indoor/Hard)',
	// 				},
	// 				{
	// 					name: 'ATP Masters 1000 Paris ',
	// 					surface: '(Indoor/Hard)',
	// 				},
	// 				{
	// 					name: 'ATP Masters 1000 Paris ',
	// 					surface: '(Indoor/Hard)',
	// 				},
	// 				{
	// 					name: 'ATP Masters 1000 Paris ',
	// 					surface: '(Indoor/Hard)',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			year: 2020,
	// 			titles: [
	// 				{
	// 					name: 'ATP Masters 1000 Paris ',
	// 					surface: '(Indoor/Hard)',
	// 				},
	// 				{
	// 					name: 'ATP Masters 1000 Paris ',
	// 					surface: '(Indoor/Hard)',
	// 				},
	// 				{
	// 					name: 'ATP Masters 1000 Paris ',
	// 					surface: '(Indoor/Hard)',
	// 				},
	// 				{
	// 					name: 'ATP Masters 1000 Paris ',
	// 					surface: '(Indoor/Hard)',
	// 				},
	// 				{
	// 					name: 'ATP Masters 1000 Paris ',
	// 					surface: '(Indoor/Hard)',
	// 				},
	// 			],
	// 		},
	// 	],
	// 	rankingdata: [
	// 		{
	// 			date: '22.01.17',
	// 			ranking: 1,
	// 			rankingmove: 0,
	// 			points: 11015,
	// 			droppingpoints: 0,
	// 			nextbest: 0,
	// 		},
	// 		{
	// 			date: '22.01.17',
	// 			ranking: 1,
	// 			rankingmove: 0,
	// 			points: 11015,
	// 			droppingpoints: 0,
	// 			nextbest: 0,
	// 		},
	// 	],
	// 	stats: {
	// 		service: {
	// 			aces: 9,
	// 			doublefaults: 045,
	// 			firstserve: 65,
	// 			firstservepointswon: 74,
	// 			secondservepointswon: 55,
	// 			breakpointsfaced: 5881,
	// 			breakpointsaved: 65,
	// 			gamesplayed: 14321,
	// 			gameswon: 86,
	// 			totalpointswon: 67,
	// 		},
	// 		return: {
	// 			firstservepointswon: 34,
	// 			secondservepointswon: 55,
	// 			breakpointopportunities: 10100,
	// 			breakpointsconverted: 44,
	// 			gamesplayed: 13930,
	// 			gameswon: 5881,
	// 			breakpointsaved: 65,
	// 			pointswon: 14321,
	// 			servicegameswon: 86,
	// 			totalpointswon: 67,
	// 		},
	// 	},