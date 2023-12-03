import express from "express";

import db from "./config/Database.js";
import UserRoute from "./routes/orderRoute.js";

const app = express();
const PORT = 4500;

app.use(express.json()); // For reading data on body in JSON format

// Route
app.use(UserRoute);

// db sync() is for synchronize all model at once
db.sync({ alter: true })
  .then(() => {
    console.log(`Database connected`);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(`Unable to connect to databse: ${error}`));
