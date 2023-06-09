const router = require("express").Router();

// Local imports
const authRoute = require("./authRoute");
const postRoute = require("./postRoute");

router.use(authRoute);
router.use("/post",postRoute);
router.use("/connection",require("./connectionRoute"));
router.use("/job",require("./jobRoute"));
module.exports = router;