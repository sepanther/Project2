module.exports = function(sequelize, DataTypes) {
    var rating = sequelize.define("rating", {
      beer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
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