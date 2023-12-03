//importation
const express = require("express");
const mongoose = require("mongoose"); // pour communiquer avec mongo
const bodyParser = require("body-parser"); //pour extraire le body de request
require("dotenv").config(); // pour accéder au fichier .env (li fiha el infos pour connecter au mongodb)

const app = express();
const port = 8000;

const userRoutes = require("./Routers/userRoutes");

//pour pouvoir lire les body des request
app.use(bodyParser.json());

//connect to mongoDb
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DATABASEURL, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

app.use("/users", userRoutes);
//serveur à l'ecout
app.listen(port, () => {
  console.log(`hello server running on port ${port}`);
});
