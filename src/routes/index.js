const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");
const auth=require("../middleware/auth")

router.get("/test", testController.testRoute);


router.get("/protected", auth, (req, res) => {
    res.json({
      message: " You accessed a protected route!",
      user: req.user,
    });
  });
  

module.exports = router;
