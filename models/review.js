const Sequelize = require("sequelize");

module.exports = class Review extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				// review_id: {
				//   // 아래 형식 맞추기!
				//   type: Sequelize.INTEGER,
				//   allowNull: false,
				//   unique: true,
				//   autoIncrement: true,
				//   primaryKey: true,
				// },
				pro_name: {
					type: Sequelize.STRING(50),
					allowNull: false,
				},
				cate: {
					type: Sequelize.STRING(15),
					allowNull: false,
				},
				tit: {
					type: Sequelize.STRING(30),
					allowNull: false,
				},
				cus_name: {
					type: Sequelize.STRING(15),
					allowNull: false,
				},
				re_date: {
					type: Sequelize.STRING(15),
					allowNull: false,
				},
				view: {
					type: Sequelize.STRING(15),
					allowNull: false,
				},
				rec: {
					type: Sequelize.STRING(15),
					allowNull: false,
				},
				rate: {
					type: Sequelize.STRING(15),
					allowNull: false,
				},
			},
			{
				sequelize,
				timestamps: true,
				underscored: false,
				modelName: "Review",
				tableName: "reviews",
				paranoid: true,
				charset: "utf8",
				collate: "utf8_general_ci",
			}
		);
	}
	static associate(db) {
		db.Review.belongsTo(db.User);
		db.Review.belongsTo(db.Location);
	}
};
