const router = require("express").Router();
const verify = require("../middleware/verifyUserToken.middleware");

router.get("/protected", verify, (req, res) => {
  res.send("This is a protected route");
});

module.exports = router;
