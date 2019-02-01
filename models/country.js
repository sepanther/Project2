module.exports = function(sequelize, DataTypes) {
    var country = sequelize.define("country", {
      country: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return country;
  };