import express from "express";
import { env } from "./utils/env.util";
import { configDotenv } from "dotenv";
import authRoute from "./routes/auth.route";
import errorHandler from "./middleware/errorHandler";

// init
const app = express();
configDotenv();
const port = env("PORT") || 5000;
app.use(express.json());

// setup route
app.use("/api/auth", authRoute);

// setup error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
