export default {
    Query: {
        nowRunningMovies: (parent, args, { theData }) => {
            return theData;
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