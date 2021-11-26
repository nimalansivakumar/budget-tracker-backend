const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
const connectDB = require("./config/mongo");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

//define routes

app.use("/sign-in", require("./routes/signIn"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/dashboard/addBudget", require("./routes/addBudget"));
app.use("/dashboard/dataEntry", require("./routes/dataEntry"));
app.use("/dashboard/dataBoard", require("./routes/dataBoard"));
app.use("/dashboard/notes", require("./routes/note"));
app.use("/users", require("./routes/admin"));

app.get("/", (req, res) => res.send("API is running"));
app.listen(PORT, () =>
  console.log("Server started and listening on port: " + PORT)
);
