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
        await Claps.create({
            id: id,
            claps: 0
        });
        return 0;
    }

    return Claps;
};

module.exports = claps;