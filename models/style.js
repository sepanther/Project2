module.exports = function(sequelize, DataTypes) {
    var style = sequelize.define("style", {
      style: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return style;
  };