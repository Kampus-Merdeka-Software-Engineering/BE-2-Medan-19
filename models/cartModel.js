import { Sequelize } from "sequelize";

import db from "../config/Database.js";

import menu from "./menuModel.js";

const {DataTypes} = Sequelize;

const cart = db.define("cart", {
  menu_id :{
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: menu,
      key: "menu_id",
    }
  },
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  quantity:{
    type: DataTypes.INTEGER,
    defaultValue: 1,
  }
});

export default cart;