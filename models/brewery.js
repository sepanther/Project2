module.exports = function(sequelize, DataTypes) {
    var Brewery = sequelize.define("Brewery", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
          type: DataTypes.STRING,
          allowNull: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
    

  Brewery.associate = function(models) {

    Brewery.belongsTo(models.Country, {
      foreignKey: {
        name: "country_id",
        allowNull: true
      }
    });
    };
return Brewery;
  };