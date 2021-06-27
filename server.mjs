import express, { json, urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import teamsRoutes from "./routes/teams.mjs";

const app = express();
app.use(
  cors(),
  json(),
  urlencoded({ extended: false }),
  helmet(),
  express.static("public")
);

// Routes
app.use("/teams", teamsRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("app running on port: " + port);
});
