const Sequelize = require('sequelize');

sequelize = null

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres',
		protocol: 'postgres',
		port: 5432,
        host: 'ec2-174-129-208-118.compute-1.amazonaws.com',
		logging: true
	});
} else {
    sequelize = new Sequelize(
        process.env.DATABASE || 'movieclaps',
        process.env.DATABASE_USER || '',
        process.env.DATABASE_PASSWORD || '',
        {
            dialect: 'postgres'
        }
    );
}

const models = {
    Claps: sequelize.import('./claps'),
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

module.exports = {
    sequelize: sequelize,
    models: models
}