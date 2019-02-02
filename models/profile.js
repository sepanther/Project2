module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
      profile: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Profile;
  };