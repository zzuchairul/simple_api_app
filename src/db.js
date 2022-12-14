const { connect, set } = require("mongoose");
require("dotenv").config();

set("strictQuery", false);
connect(process.env.MONGO_URI).then(() => {
  console.log("Connect to MongoDB");
});
