let theData = [
	{
		vote_count: 450,
		id: 447404,
		video: false,
		vote_average: 7,
		title: 'Pokémon Detective Pikachu',
		popularity: 298.693,
		poster_path: '/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg',
		original_language: 'en',
		original_title: 'Pokémon Detective Pikachu',
		backdrop_path: '/nDP33LmQwNsnPv29GQazz59HjJI.jpg',
		adult: false,
		overview:
			'In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.',
		release_date: '2019-05-03'
	},
	{
		vote_count: 5308,
		id: 299534,
		video: false,
		vote_average: 8.5,
		title: 'Avengers: Endgame',
		popularity: 297.312,
		poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
		original_language: 'en',
		original_title: 'Avengers: Endgame',
		backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
		adult: false,
		overview:
			"After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
		release_date: '2019-04-24'
	},
	{
		vote_count: 1557,
		id: 287947,
		video: false,
		vote_average: 7.1,
		title: 'Shazam!',
		popularity: 205.832,
		poster_path: '/xnopI5Xtky18MPhK40cZAGAOVeV.jpg',
		original_language: 'en',
		original_title: 'Shazam!',
		backdrop_path: '/bi4jh0Kt0uuZGsGJoUUfqmbrjQg.jpg',
		adult: false,
		overview:
			'A boy is given the ability to become an adult superhero in times of need with a single magic word.',
		release_date: '2019-03-23'
	},
	{
		vote_count: 8,
		id: 531309,
		video: false,
		vote_average: 5,
		title: 'Brightburn',
		popularity: 129.668,
		poster_path: '/roslEbKdY0WSgYaB5KXvPKY0bXS.jpg',
		original_language: 'en',
		original_title: 'Brightburn',
		genre_ids: [27, 878, 18, 53],
		backdrop_path: '/uHEI6v8ApQusjbaRZ8o7WcLYeWb.jpg',
		adult: false,
		overview:
			'A child from another world crash-lands on Earth, but instead of becoming a hero to mankind, he is an evil little boy.',
		release_date: '2019-05-10'
	},
	{
		vote_count: 369,
		id: 456740,
		video: false,
		vote_average: 5.1,
		title: 'Hellboy',
		popularity: 125.642,
		poster_path: '/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg',
		original_language: 'en',
		original_title: 'Hellboy',
		genre_ids: [28, 12, 14],
		backdrop_path: '/5BkSkNtfrnTuKOtTaZhl8avn4wU.jpg',
		adult: false,
		overview:
			"Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.",
		release_date: '2019-04-10'
	},
	{
		vote_count: 18,
		id: 458156,
		video: false,
		vote_average: 7.7,
		title: 'John Wick: Chapter 3 – Parabellum',
		popularity: 120.772,
		poster_path: '/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg',
		original_language: 'en',
		original_title: 'John Wick: Chapter 3 – Parabellum',
		genre_ids: [80, 28, 53],
		backdrop_path: '/jEjyjX4izUucoq7A9jmbcT6q3e1.jpg',
		adult: false,
		overview:
			'John Wick is on the run for two reasons… he’s being hunted for a global $14 million dollar open contract on his life, and for breaking a central rule: taking a life on Continental Hotel grounds. The victim was a member of the High Table who ordered the open contract. John should have already been executed, except the Continental’s manager, Winston, has given him a one-hour grace period before he’s “Excommunicado” – membership revoked, banned from all services and cut off from other members. John uses the service industry to stay alive as he fights and kills his way out of New York City.',
		release_date: '2019-05-15'
	},
	{
		vote_count: 499,
		id: 157433,
		video: false,
		vote_average: 6,
		title: 'Pet Sematary',
		popularity: 114.002,
		poster_path: '/7SPhr7Qj39vbnfF9O2qHRYaKHAL.jpg',
		original_language: 'en',
		original_title: 'Pet Sematary',
		genre_ids: [53, 9648, 27],
		backdrop_path: '/dpJq6trUDOutSPSLrFdROPmzaVn.jpg',
		adult: false,
		overview:
			"Louis Creed, his wife Rachel and their two children Gage and Ellie move to a rural home where they are welcomed and enlightened about the eerie 'Pet Sematary' located nearby. After the tragedy of their cat being killed by a truck, Louis resorts to burying it in the mysterious pet cemetery, which is definitely not as it seems, as it proves to the Creeds that sometimes dead is better.",
		release_date: '2019-04-04'
	},
	{
		vote_count: 508,
		id: 438650,
		video: false,
		vote_average: 5.2,
		title: 'Cold Pursuit',
		popularity: 112.882,
		poster_path: '/otK0H9H1w3JVGJjad5Kzx3Z9kt2.jpg',
		original_language: 'en',
		original_title: 'Cold Pursuit',
		genre_ids: [28, 18, 53, 80, 35],
		backdrop_path: '/aiM3XxYE2JvW1vJ4AC6cI1RjAoT.jpg',
		adult: false,
		overview:
			"Nels Coxman, a snowplow driver recently awarded the title of citizen of the year, triggers a series of violence and misunderstandings between two rival gangs after he starts avenging his son's death.",
		release_date: '2019-02-07'
	},
	{
		vote_count: 36,
		id: 449562,
		video: false,
		vote_average: 6.1,
		title: 'The Hustle',
		popularity: 110.113,
		poster_path: '/qibqW5Dnvqp4hcEnoTARbQgxwJy.jpg',
		original_language: 'en',
		original_title: 'The Hustle',
		genre_ids: [35],
		backdrop_path: '/s6awXOxTKYQLSktiIJfI3969dZH.jpg',
		adult: false,
		overview:
			'Two female scam artists, one low rent and the other high class, compete to swindle a naïve tech prodigy out of his fortune. A remake of the 1988 comedy "Dirty Rotten Scoundrels."',
		release_date: '2019-05-09'
	},
	{
		vote_count: 883,
		id: 537915,
		video: false,
		vote_average: 6,
		title: 'After',
		popularity: 95.808,
		poster_path: '/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg',
		original_language: 'en',
		original_title: 'After',
		genre_ids: [18, 10749],
		backdrop_path: '/997ToEZvF2Obp9zNZbY5ELVnmrW.jpg',
		adult: false,
		overview:
			'A young woman falls for a guy with a dark secret and the two embark on a rocky relationship.',
		release_date: '2019-04-11'
	},
	{
		vote_count: 441,
		id: 457799,
		video: false,
		vote_average: 7.1,
		title: 'Extremely Wicked, Shockingly Evil and Vile',
		popularity: 81.792,
		poster_path: '/zSuJ3r5zr5T26tTxyygHhgkUAIM.jpg',
		original_language: 'en',
		original_title: 'Extremely Wicked, Shockingly Evil and Vile',
		genre_ids: [53, 80, 18, 36],
		backdrop_path: '/5yXNf13ly6kFQSbI5BZRQlDhCib.jpg',
		adult: false,
		overview:
			'A chronicle of the crimes of Ted Bundy, from the perspective of his longtime girlfriend, Elizabeth Kloepfer, who refused to believe the truth about him for years.',
		release_date: '2019-05-02'
	},
	{
		vote_count: 1779,
		id: 166428,
		video: false,
		vote_average: 7.6,
		title: 'How to Train Your Dragon: The Hidden World',
		popularity: 81.122,
		poster_path: '/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg',
		original_language: 'en',
		original_title: 'How to Train Your Dragon: The Hidden World',
		genre_ids: [16, 10751, 12],
		backdrop_path: '/lFwykSz3Ykj1Q3JXJURnGUTNf1o.jpg',
		adult: false,
		overview:
			'As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.',
		release_date: '2019-01-03'
	},
	{
		vote_count: 54,
		id: 526050,
		video: false,
		vote_average: 6.1,
		title: 'Little',
		popularity: 75.302,
		poster_path: '/4MDB6jJl3U7xK1Gw64zIqt9pQA4.jpg',
		original_language: 'en',
		original_title: 'Little',
		genre_ids: [35, 14],
		backdrop_path: '/tmM78qRhpg0i2Cky8Q8hXKASOXY.jpg',
		adult: false,
		overview:
			'A woman receives the chance to relive the life of her younger self, at a point in her life when the pressures of adulthood become too much for her to bear.',
		release_date: '2019-04-04'
	},
	{
		vote_count: 254,
		id: 487297,
		video: false,
		vote_average: 5.8,
		title: 'What Men Want',
		popularity: 70.409,
		poster_path: '/30IiwvIRqPGjUV0bxJkZfnSiCL.jpg',
		original_language: 'en',
		original_title: 'What Men Want',
		genre_ids: [35, 14, 10749],
		backdrop_path: '/wbAQKi2E5cO0Utk5KDk9yX3kuOu.jpg',
		adult: false,
		overview:
			'Magically able to hear what men are thinking, a sports agent uses her newfound ability to turn the tables on her overbearing male colleagues.',
		release_date: '2019-02-08'
	},
	{
		vote_count: 572,
		id: 527261,
		video: false,
		vote_average: 6,
		title: 'The Silence',
		popularity: 68.044,
		poster_path: '/lTVOquzxw2DPF3MKuYd1ynz9F6H.jpg',
		original_language: 'en',
		original_title: 'The Silence',
		genre_ids: [27, 18, 53, 14],
		backdrop_path: '/iHJQIKSLHN2mUUWySpj2MO5HVtS.jpg',
		adult: false,
		overview:
			'With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.',
		release_date: '2019-05-16'
	},
	{
		vote_count: 5,
		id: 566555,
		video: false,
		vote_average: 5.4,
		title: 'Detective Conan: The Fist of Blue Sapphire',
		popularity: 65.94,
		poster_path: '/1GyvpwvgswOrHvxjnw2FBLNkTyo.jpg',
		original_language: 'ja',
		original_title: '名探偵コナン 紺青の拳（フィスト）',
		genre_ids: [16, 28, 18, 9648, 35],
		backdrop_path: '/wf6VDSi4aFCZfuD8sX8JAKLfJ5m.jpg',
		adult: false,
		overview: '23rd Detective Conan Movie.',
		release_date: '2019-04-12'
	},
	{
		vote_count: 197,
		id: 445629,
		video: false,
		vote_average: 6.4,
		title: 'Fighting with My Family',
		popularity: 58.39,
		poster_path: '/3TZCBAdKQiz0cGKGEjZiyZUA01O.jpg',
		original_language: 'en',
		original_title: 'Fighting with My Family',
		genre_ids: [35, 18],
		backdrop_path: '/mYKP6qcDUimVMAHQWLOuDHjO19S.jpg',
		adult: false,
		overview:
			"Born into a tight-knit wrestling family, Paige and her brother Zak are ecstatic when they get the once-in-a-lifetime opportunity to try out for the WWE. But when only Paige earns a spot in the competitive training program, she must leave her loved ones behind and face this new cutthroat world alone. Paige's journey pushes her to dig deep and ultimately prove to the world that what makes her different is the very thing that can make her a star.",
		release_date: '2019-02-14'
	},
	{
		vote_count: 63,
		id: 513083,
		video: false,
		vote_average: 6.2,
		title: 'Wine Country',
		popularity: 55.419,
		poster_path: '/mi5l29DQFdwrTXxbqM2OLbs830H.jpg',
		original_language: 'en',
		original_title: 'Wine Country',
		genre_ids: [35],
		backdrop_path: '/zlGyQVqPoSLDsEgEgdWaUyqkxrC.jpg',
		adult: false,
		overview:
			'A group of friends head to the land of oaky Chardonnays and big, bold Cabernet Sauvignons for one member of the squad’s 50th birthday party.',
		release_date: '2019-05-08'
	},
	{
		vote_count: 272,
		id: 480414,
		video: false,
		vote_average: 5.5,
		title: 'The Curse of La Llorona',
		popularity: 50.616,
		poster_path: '/jhZlXSnFUpNiLAek9EkPrtLEWQI.jpg',
		original_language: 'en',
		original_title: 'The Curse of La Llorona',
		genre_ids: [53, 27, 9648],
		backdrop_path: '/u2vGggeMPAkhEtD7bYGfeThsQiM.jpg',
		adult: false,
		overview:
			'A social worker dealing with the disappearance of two children fears for her own family after beginning the investigation.',
		release_date: '2019-04-17'
	},
	{
		vote_count: 1301,
		id: 458723,
		video: false,
		vote_average: 7.2,
		title: 'Us',
		popularity: 44.636,
		poster_path: '/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg',
		original_language: 'en',
		original_title: 'Us',
		genre_ids: [53, 27],
		backdrop_path: '/jNUCddkM1fjYcFIcEwFjc7s2H4V.jpg',
		adult: false,
		overview:
			'Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited.',
		release_date: '2019-03-14'
	}
];

export {
    theData
};