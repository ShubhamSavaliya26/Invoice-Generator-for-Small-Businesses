const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  products: [{ productName: String, quantity: Number, price: Number }],
  totalAmount: { type: Number, required: true },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
