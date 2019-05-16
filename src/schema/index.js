import { gql } from 'apollo-server-express';

export default gql`
	type Query {
		nowRunningMovies: [Movie]
	}

	type Movie {
		id: Int
		video: Boolean
		vote_count: Int
		vote_average: Float
		popularity: Float
		poster: String
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
`;
