module.exports = function(sequelize, DataTypes) {
  var beer = sequelize.define("beer", {
    beer_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ABV: {
      type: DataTypes.FLOAT(3,1),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brewery: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flavor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_link: {
      type: DataTypes.TEXT
    }
  });
  return beer;
};
