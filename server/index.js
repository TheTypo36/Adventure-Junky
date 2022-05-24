//importing dependencies
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import home from "./routes/home.js";
const PORT = 5000;
const CONNECTION_URL =
  "mongodb+srv://thetypo36:36'ashish@cluster0.fn30s.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use("/", home);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server is running on the port: ${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
