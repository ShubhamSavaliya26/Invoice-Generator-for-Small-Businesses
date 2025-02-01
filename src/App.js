import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [customerName, setCustomerName] = useState('');
  const [error, setError] = useState('');

  // This function will be triggered when the user clicks the "Create Invoice" button
  const handleInvoiceCreation = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/invoices", {
        customerName,
      });
      alert(`Invoice created for ${customerName}`);
    } catch (err) {
      setError("There was an error creating the invoice.");
      console.error("Error:", err);
    }
  };

  return (
    <div className="App">
      <h1>Invoice Generator</h1>
      <div>
        <label>
          Customer Name:
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleInvoiceCreation}>Create Invoice</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default App;
