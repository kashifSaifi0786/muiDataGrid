const express = require("express");
const userRouter = require("./routes/users");
const cores = require("cors");

const app = express();

app.use(cores());
app.use(express.json());
app.use("/api/users", userRouter);

app.listen(5000, () => {
  console.log("Backend Running on port 5000");
});
