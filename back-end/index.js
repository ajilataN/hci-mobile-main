const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
const app = express()

// CONFIGS
const port = 5999
require("dotenv").config();
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const novice = require("./routes/novice")
const { join } = require("path/win32")
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
app.use(cors())
app.use(express.static(path.join(__dirname, "build")));

// ROUTES
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.use("/novice", novice)


// START SERVER
mongoose
  .connect(process.env.URI, connectionParams) //process.env.URI comes locally from .env file.
  .then(() => {
    /// Start listening only if database connection succeds
    app.listen(process.env.PORT || port, () => {
      console.log(
        `Database connected and server running on port: ${
            process.env.PORT || port
          }` // If this line is displayed on your console you are ready o go.
      );
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });