import { Sequelize } from "sequelize";

import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const order = db.define("order", {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  full_name: {
    type: DataTypes.STRING,
  },
  number: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  ordered_menu: {
    type: DataTypes.JSON
  }
});

export default order;