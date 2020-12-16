const express = require("express");
require("colors");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const connectDb = require("./config/db");
const category = require("./routes/category");
const subCategory = require("./routes/subCategory");
const cart = require("./routes/cart");
const product = require("./routes/product");
const chat = require("./routes/chat");
const wish = require("./routes/wish");
const sanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const bodyParser = require("body-parser");
const passport = require("passport");

//Initialize express app
const app = express();
//Configuring the Environment Variables
dotenv.config({ path: "./config/config.env" });
//Development mode logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//Db connection
connectDb();
//Nosql injection
app.use(sanitize());
//precautionary security headers
app.use(helmet());
//CrossSiteScripting
app.use(xss());
//http parameter pollution attack
app.use(hpp());
//Json parsing
app.use(express.json());
//Form parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
//CORS
app.use(cors());

app.use(bodyParser.json());

//Routing
app.use("/api/category", category);
app.use("/api/subCategory", subCategory);
app.use("/api/product", product);
app.use("/api/cart", cart);
app.use("/api/chat", chat);
app.use("/api/wish", wish);

//Redirect all other urls to client(frontend)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

//=== 3 - INITIALIZE PASSPORT MIDDLEWARE
app.use(passport.initialize());
require("./middleware/jwt")(passport);

//=== 4 - CONFIGURE ROUTES
//Configure Route
require("./routes/index")(app);
//Configure the port
const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () =>
  console.log(
    `Server running in "${process.env.NODE_ENV}" mode on port "${PORT}"`.yellow
      .bold
  )
);
//Handle the promise rejection error
process.on("unhandledRejection", (err, promise) => {
  console.log("Error: ".red.bold, err.message);
  server.close(() => process.exit(1));
});
