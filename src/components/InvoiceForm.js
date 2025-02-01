import React, { useState } from 'react';
import axios from 'axios';

const InvoiceForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [error, setError] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  const handleInvoiceCreation = async () => {
    if (!customerName) {
      setError('Please enter a customer name.');
      return;
    }

    try {
      // Call the backend API to generate the invoice
      const response = await axios.post('http://localhost:5000/generate-invoice', { customerName });

      // Handle the successful response and get the PDF file URL
      if (response.data.pdfFilePath) {
        setPdfUrl(`http://localhost:5000/invoices/${response.data.pdfFilePath}`);
        setError('');
      }
    } catch (err) {
      setError('There was an error creating the invoice.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Create Invoice</h2>
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {pdfUrl && (
        <div>
          <p>Invoice created successfully! You can download the PDF here:</p>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            Download Invoice PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default InvoiceForm;
