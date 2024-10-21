const router = require("express").Router();
const { verifyToken } = require("../middleware/verifyToken.middleware");

router.get("/protected", verifyToken, (req, res) => {
  res.send("This is a protected route");
});

module.exports = router;
