import express from "express";

import db from "./config/Database.js";
import orderRoute from "./routes/orderRoute.js";
import cartRoute from "./routes/cartRoute.js";
import menuRoute from './routes/menuRoute.js';
import cors from "cors";

const app = express();
const PORT = process.env.PORT ||3000;

app.use(cors());
app.use(express.json()); // For reading data on body in JSON format

// Route
app.use(menuRoute);
app.use(orderRoute);
app.use(cartRoute);

// db sync() is for synchronize all model at once
db.sync({ alter: true })
  .then(() => {
    console.log(`Database connected`);

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(`Unable to connect to databse: ${error}`));
