module.exports = function(sequelize, DataTypes) {
    var brewery = sequelize.define("brewery", {
      brewery: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return brewery;
  };