const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();
const http = require("http").Server(app);

app.get("/", (req, res) => {
  res.send({ hi: "There" });
});

http.listen(PORT, function() {
  console.log(`Server started on port: ${PORT}`);
});
