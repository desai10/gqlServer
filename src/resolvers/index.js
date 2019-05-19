var request = require('request');
const { pubsub, eventName } = require('../subscriptions.js');

module.exports = {
	Query: {
		nowRunningMovies: () => {
			return new Promise((resolve, reject) => {
				var options = {
					method: 'GET',
					url: 'https://api.themoviedb.org/3/movie/now_playing',
					qs: {
						api_key:
							process.env.TMDB_API_KEY ||
							'260465034a27680187bf3f997beccf9d'
					},
					body: '{}'
				};

				request(options, function(error, response, body) {
					if (error) reject(error);

					console.log(response);
					resolve(JSON.parse(body)['results']);
				});
			});
		}
	},
	Movie: {
		claps: async (parent, args, { models }) => {
			console.log(parent.id);
			return await models.Claps.findById(parent.id);
		},
		similarMovies: parent => {
			return new Promise((resolve, reject) => {
				var options = {
					method: 'GET',
					url:
						'https://api.themoviedb.org/3/movie/' +
						parent.id +
						'/similar',
					qs: {
						api_key:
							process.env.TMDB_API_KEY ||
							'260465034a27680187bf3f997beccf9d'
					},
					body: '{}'
				};

				request(options, function(error, response, body) {
					if (error) reject(error);

					console.log(response);
					resolve(JSON.parse(body)['results']);
				});
			});
		}
	},
	Mutation: {
		clap: async (parent, { id }, { models }) => {
            let incResult =  await models.Claps.incrementClaps(id);
            pubsub.publish(eventName + id, incResult);
            return incResult;
		}
	},
	Subscription: {
		clapsChangedFor: {
			subscribe: (parent, { id }) => pubsub.asyncIterator(eventName + id)
		}
	}
};