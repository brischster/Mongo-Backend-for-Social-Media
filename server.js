const express = require("express");
const db = require("./config/connection");

const { Thought } = require("./models");
const { Users } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}`);
  });
});

// creates a new document
