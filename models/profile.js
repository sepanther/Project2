module.exports = function(sequelize, DataTypes) {
    var profile = sequelize.define("profile", {
      profile: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return profile;
  };