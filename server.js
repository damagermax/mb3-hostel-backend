import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import { connectDb } from "./utils/database.js";

import router from "./route/index.js";
import errorHandler from "./middleware/error.middleware.js";

dotenv.config({ path: ".env" });

const app = express();

app.use(cors("*"));
app.use(express.json());
app.use("/api/v1", router);
app.use(errorHandler);

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
  connectDb();
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`ERROR ${error.message}`);
  server.close(() => process.exit(1));
});
