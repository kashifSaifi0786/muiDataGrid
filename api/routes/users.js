const axios = require("axios");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const users = await axios.get(url);
    res.status(200).json(users.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
