module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return user;
  };