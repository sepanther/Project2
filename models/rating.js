module.exports = function(sequelize, DataTypes) {
    var rating = sequelize.define("rating", {
      beer: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      rating: {
          type: DataTypes.FLOAT(2,1),
          allowNull: false
      }
    });
    return rating;
  };

beer.associate = function(models) {
    
    rating.belongsTo(models.beer, {
        as: "beer",
        foreignKey: {
            name: "id",
            allowNull: false
      }
    });

    rating.belongsTo(models.user, {
        as: "user",
        foreignKey: {
            name: "id",
            allowNull: false
        }
    })

  }