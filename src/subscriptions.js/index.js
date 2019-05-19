const { PubSub } = require('apollo-server');

module.exports = {
    pubsub: new PubSub(),
    eventName: 'clapsIncrementedFor'
};