const router = require("express").Router();

// Local imports
const authRoute = require("./authRoute");


router.use(authRoute);


module.exports = router;