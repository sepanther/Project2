module.exports = function(sequelize, DataTypes) {
    const Review = sequelize.define(
      "Review",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        rating: {
          type: DataTypes.DOUBLE,
          allowNull: true
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true
        }
      },
  
      { freezeTableName: true, underscored: true }
    );
  
    Review.associate = function(models) {
      Review.belongsTo(models.User, {
        foreignKey: {
          name: "user_id",
          allowNull: false
        }
      });
      Review.belongsTo(models.Beer, {
        foreignKey: {
          name: "beer_id",
          allowNull: false
        }
      });
    };
  
    return Review;
  };