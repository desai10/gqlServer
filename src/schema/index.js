const { gql } = require('apollo-server-express');

module.exports = gql`
	type Query {
		nowRunningMovies: [Movie]
		movie(id: Int!): Movie
	}

	type Mutation {
		clap(id: Int!): Movie!
	}

	type Movie {
		id: Int
		video: Boolean
		vote_count: Int
		vote_average: Float
		popularity: Float
		poster_path: String
		original_language: String
		original_title: String
		backdrop_path: String
		adult: Boolean
		overview: String
		release_date: String
		title: String
		claps: Int
		similarMovies: [Movie]
	}

	type Subscription {
		clapsChangedFor(id: Int!): Movie
	}
`;
