const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				// id: {
				// 	type: Sequelize.INTEGER,
				// 	allowNull: false,
				// 	primaryKey: true,
				// 	autoIncrement: true,
				// 	unique: true,
				// },
				username: {
					type: Sequelize.STRING(50),
					allowNull: false,
				},
				password: {
					type: Sequelize.STRING(255),
					allowNull: false,
				},
				email: {
					type: Sequelize.STRING(100),
					allowNull: false,
				},
			},
			{
				sequelize,
				timestamps: false,
				underscored: false,
				modelName: "User",
				tableName: "user",
				paranoid: true,
				charset: "utf8",
				collate: "utf8_general_ci",
			}
		);
	}
	static associate(db) {
		// db.User.belongsTo(db.User);
		// db.User.belongsTo(db.Location);
	}
};