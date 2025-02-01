const Invoice = require("../models/invoiceModel");

// Create an invoice
const createInvoice = async (req, res) => {
  try {
    const { customerName, products, totalAmount } = req.body;
    const invoice = new Invoice({ customerName, products, totalAmount });
    await invoice.save();
    res.status(201).json(invoice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createInvoice };
