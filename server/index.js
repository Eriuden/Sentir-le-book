const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const usersRoutes = require("./routes/users.routes");
const booksRoutes = require("./routes/books.routes");
require("dotenv").config({ path: "./config/.env" });
const { requireAuth, checkUser } = require("./middleware/auth.middleware");
require("./config/db");
const cors = require("cors");
const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

//routes
app.use("/api/users", usersRoutes);
app.use("/api/books", booksRoutes);

//serveur

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});