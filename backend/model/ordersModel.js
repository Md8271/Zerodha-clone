const {model} = require("mongoose");

const {ordersSchema} = require('../schemas/ordersSchema');

const ordersModel = new model("order",ordersSchema);

module.exports = ordersModel;