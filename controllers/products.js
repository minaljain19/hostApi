const product = require("../models/product");
const getAllproducts = async (req, res) => {
  //get Data from database
  const { name, _id, mob, sort, select } = req.query;
  const obj = {};
  if (name) {
    obj.name = { $regex: name, $options: "i" };
  }
  if (_id) {
    obj._id = _id;
  }
  if (mob) {
    obj.mob = mob;
  }
  let newData = product.find(obj);
  if (sort) {
    let sortFix = sort.replace(",", " ");

    newData = newData.sort(sortFix);
  }
  if (select) {
    let seleVal = select.split(",").join("  ");
    newData = newData.select(seleVal);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 1;
  let skip = (page - 1) * limit;
  newData = newData.skip(skip).limit(limit);
  const apiData = await newData;

  res.status(200).json({ apiData, nbHits: apiData.length });
};
const getAllproductsTesting = async (req, res) => {
  const d = await product.find(req.query).sort("name");
  res.status(200).json({ d });
};
module.exports = { getAllproducts, getAllproductsTesting };
