module.exports = function(sequelize, DataTypes) {
    var Country = sequelize.define("Country", {
      country: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Country;
  };