const Sequelize = require("sequelize");

module.exports = class Product extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                product_name: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                model_name: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                price: {
                    type: Sequelize.INTEGER(12),
                    allowNull: false,
                },
                img: {
                    type: Sequelize.STRING(50),
                    allowNull: true,
                },
                color: {
                    type: Sequelize.STRING(50),
                    allowNull: true,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: false,
                modelName: "Product",
                tableName: "products",
                paranoid: true,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }
    static associate(db) {
        //     db.Review.belongsTo(db.User);
        //     db.Review.belongsTo(db.Location);
    }
};
