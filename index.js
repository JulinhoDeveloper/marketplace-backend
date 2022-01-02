const express = require ("express");
const cors = require ("cors");
const mongoose = require ("mongoose");
const morgan = require("morgan");
require("dotenv").config();
const userRoutes = require("./routes/auth");

const app = express();

// db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error: ", err));

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// route middleware
app.use("/users", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
