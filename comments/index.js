const express = require("express");
const router = require("./routes/route");
const dotenv = require("dotenv");
const connect = require("./config/dbConfig");
const consume = require("../posts/kafka/consumer");

const app = express();
dotenv.config();
connect();
app.use(express.json());

app.use(router);

// (async function () {
//   try {
//     await consume();
//   } catch (error) {
//     console.log(error);
//     process.exit();
//   }
// })();

const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
