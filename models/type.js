module.exports = function(sequelize, DataTypes) {
    var type = sequelize.define("type", {
      type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return type;
  };