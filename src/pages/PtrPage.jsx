import React, { useState } from 'react';
import { PtrHeader } from '../components/Header';

const PtrPage = () => {
  const [isIpSelected, setIsIpSelected] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(''); // State to hold the backend result

  const handleCheckboxChange = (event) => {
    setIsIpSelected(event.target.checked); // Toggle between IP and Domain
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAnalyseClick = async () => {
    const data = {
      input: inputValue,
      isIp: isIpSelected, // Send the flag that tells the back-end whether it's an IP or Domain
    };

    try {
      const response = await fetch('http://localhost:5000/api/ptr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result)
      setResult(result.message); // Display the result from the backend
    } catch (error) {
      setResult('Error fetching data from the server.');
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <div className="row" style={{ backgroundColor: 'black' }}>
        <PtrHeader />
      </div>
      <div class="h-screen flex items-center justify-center bg-white">
        <div class="w-1/3 text-center p-6">
          <h1 class="text-4xl font-bold mb-4">PTR Records: A Gateway for Phishing Scams</h1>
          <p class="text-gray-600 mb-6">
          PTR (Pointer) Records, often used in DNS lookups, can unintentionally serve as a gateway for phishing scams. By exploiting misconfigured or spoofed PTR records, attackers can mask their identity and trick users into falling for malicious schemes.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-600">
            User Guidelines
          </button>
        </div>
      </div>

      <div className="row cardbody mt-5">
        <div className="col mt-3">
          <div className="container">
            <div className="row heading text-center">
              <div className="col-3"></div>
              <div className="col-sm-12 col-md-6">
                <h3></h3>
                <p className="mt-4 text-muted">

                </p>
                <div className="row card mt-5 mb-5 bg-white shadow-lg rounded-lg p-8">
                  <div className="col mt-4 mb-4">
                    <div className="row">
                      <h5>Enter {isIpSelected ? 'IP address' : 'Domain name'}</h5>
                      <div className="form-check mt-3">
                        <input
                          type="checkbox"
                          className="form-check-input ms-2"
                          id="ipCheckbox"
                          checked={isIpSelected}
                          onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="ipCheckbox">
                          Use IP address
                        </label>
                      </div>
                      <div className="input-group mb-3 mt-3">
                        <textarea
                          className="form-control border-2 border-black"
                          placeholder={isIpSelected ? 'e.g.: 192.168.1.1' : 'e.g.: user@example.com'}
                          rows="10"
                          aria-label="Recipient's input"
                          value={inputValue}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col">
                        <button className="btn btn-info text-white" onClick={handleAnalyseClick}>
                          Scan
                        </button>
                      </div>
                      <div className="row mt-4">
                        <div className="col result">
                          <h5>Result: {result}</h5>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PtrPage;
