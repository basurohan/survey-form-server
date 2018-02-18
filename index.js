const PORT = process.env.PORT || 3000;

const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
