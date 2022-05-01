const { DataTypes,UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    img:{
      type: DataTypes.STRING,
      defaultValue:'https://static.hitek.fr/img/actualite/ill_m/1774761325/ohmassacretitre2.jp'
    },

    hp:{
      type: DataTypes.INTEGER
    },
    attack:{
      type: DataTypes.INTEGER
    },
    defense:{
      type: DataTypes.INTEGER
    },
    specialAttack:{
      type: DataTypes.INTEGER
    },
    specialDefense:{
      type: DataTypes.INTEGER
    },
    speed:{
      type: DataTypes.INTEGER

    },
    height:{
      type: DataTypes.INTEGER

    },
    weight:{
      type: DataTypes.INTEGER

    },

  },
  {
    timestamps: false
  });
};
