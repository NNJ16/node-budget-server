import express from "express";
import db from "mongoose";
import recordRoutes from "./routes/record.route";
import { json, urlencoded } from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/records", recordRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

db.connect(process.env.MONGODB_URI).catch((error) => {
  if (error) {
    console.log("Database connection failed" + error.message);
  }
});

app.listen(process.env.PORT, () => {
  console.log("app listning in PORT " + process.env.PORT);
});
