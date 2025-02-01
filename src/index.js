import React, { useState } from "react";
import axios from "axios";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function InvoiceForm() {
  const [customerName, setCustomerName] = useState("");
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInvoice = {
      customerName,
      products: [
        { productName: "Product A", quantity: 2, price: 20 },
        { productName: "Product B", quantity: 1, price: 50 },
      ],
      totalAmount: 90,
    };

    axios.post("http://localhost:5000/api/invoices", newInvoice)
      .then((response) => {
        alert("Invoice created successfully!");
      })
      .catch((error) => {
        console.error("Error creating invoice:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Customer Name:
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create Invoice</button>
    </form>
  );
}

export default InvoiceForm;
