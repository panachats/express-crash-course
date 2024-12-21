const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();

const restaurantsRouter = require("./routes/restaurants");
const indexRouter = require("./routes");

const logger = require("./middleware/logger");

// Template engine
app.engine("hbs", engine({ extname: "hbs" }));
app.set("view engine", "hbs"); // กำหนดให้ express ใช้ template engine ชื่อ hbs

// Middleware
// อ่านข้อมูลเป็น json
app.use(express.json());
// อ่านข้อมูลจาก form ที่ส่งมาจาก client หรือก็คือจาก body ของ request
app.use(express.urlencoded({ extended: false }));
// ใช้ static file ที่อยู่ใน folder public
app.use(express.static(path.join(__dirname, "public")));

// ใช้ middleware ที่เราสร้างขึ้น
app.use(logger);

// Routes
app.use("/apis/restaurants", restaurantsRouter);
app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
