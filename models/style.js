module.exports = function(sequelize, DataTypes) {
    var Style = sequelize.define("Style", {
      style: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Style;
  };