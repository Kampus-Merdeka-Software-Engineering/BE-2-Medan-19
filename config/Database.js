import { Sequelize } from "sequelize";

const db = new Sequelize("epicbite_db", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306,
});

export default db;
