module.exports = function(sequelize, DataTypes) {
    var Type = sequelize.define("Type", {
      type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Type;
  };