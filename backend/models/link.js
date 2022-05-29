const link = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    linkLong: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    linkShort: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Link;
};

module.exports = link;
