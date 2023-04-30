const router = require("express").Router();

// Local imports
const authRoute = require("./authRoute");
const postRoute = require("./postRoute");

router.use(authRoute);
router.use("/post",postRoute);

module.exports = router;