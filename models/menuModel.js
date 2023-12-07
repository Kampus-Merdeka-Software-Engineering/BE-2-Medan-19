import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const menu = db.define('menu', {
    menu_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: true,
    }
});

export default menu;