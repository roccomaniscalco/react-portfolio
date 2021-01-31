const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

app.listen(PORT, () => {
  console.log("listening on http://localhost:" + PORT);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});
