const Sequelize = require('sequelize');

const claps = (sequelize, DataTypes) => {
    const Claps = sequelize.define('claps', {
		id: {
			type: DataTypes.INTEGER,
			unique: true,
			primaryKey: true
		},
		claps: {
			type: DataTypes.INTEGER,
			unique: false
		}
	});

    Claps.findById = async id => {
        let claps = await Claps.findOne({
            where: { id: id },
        });
        if (claps) return claps.claps;
        return 0;
    }

    Claps.incrementClaps = async id => {
        let claps = await Claps.findOne({
            where: { id: id },
        });
        if (claps) {
            let incRes = await Claps.update({
                claps: Sequelize.literal('claps + 1')
            },
            {
                where: { id: id },
                returning: true,
                plain: true
            });
            console.log(incRes);
            return incRes[1];
        } else {
            let createRes = await Claps.create({
                id: id,
                claps: 1
            });
            console.log(createRes);
            return createRes;
        }
    }

    return Claps;
};

module.exports = claps;