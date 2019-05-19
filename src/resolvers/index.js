var request = require('request');

module.exports = {
    Query: {
        nowRunningMovies: (parent, args, { theData }) => {
            return new Promise((resolve, reject) => {

                var options = {
					method: 'GET',
					url: 'https://api.themoviedb.org/3/movie/now_playing',
					qs: {
						api_key: '260465034a27680187bf3f997beccf9d'
					},
					body: '{}'
				};

                request(options, function (error, response, body) {
                    
                    if (error) reject(error);

                    resolve(JSON.parse(body)['results']);
                });
            });
        }
    },
    Movie: {
        claps: (parent) => {
            return parent.id
        },
        similarMovies: (parent, args, { theData }) => {
            return [theData.find(x => x.id == parent.id)];
        }
    }
};