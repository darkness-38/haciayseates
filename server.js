const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layout");

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/hakkimizda", (req, res) => {
  res.render("about");
});

app.get("/projeler", (req, res) => {
  res.render("projects");
});

app.get("/iletisim", (req, res) => {
  res.render("contact");
});

app.get("/kulup", (req, res) => {
  res.render("club");
});

app.listen(PORT, () => console.log(`Sunucu çalışıyor: http://localhost:${PORT}`));
