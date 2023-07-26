const express = require("express");
const router = express.Router();
const {getAllproducts,getAllproductsTesting} = require("../controllers/products")
router.route("/").get(getAllproducts);
router.route("/test").get(getAllproductsTesting);
module.exports = router;
 