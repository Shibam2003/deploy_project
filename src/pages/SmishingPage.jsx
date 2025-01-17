import React, { useState } from 'react';
import { SmishingHeader } from '../components/Header'

const SmishingPage = () => {
  const [smsMessage, setSmsMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // Update email state when input changes
  const handleMessageChange = (e) => {
    setSmsMessage(e.target.value);
  };

  // Handle the analyse button click
  const handleAnalyseClick = async () => {
    if (smsMessage.trim() === '') {
      alert('Please enter a message.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/api/smishing_analyse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: smsMessage }), // Send only the SMS message
      });

      const data = await response.json();
      console.log('Response from backend:', data);  // Log the response data
      setResponseMessage(data);  // Set the backend response to state

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="row" style={{ backgroundColor: 'black' }}>
        <SmishingHeader />
      </div>

      <div class="h-screen flex items-center justify-center bg-white">
        <div class="w-1/3 text-center p-6">
          <h1 class="text-4xl font-bold mb-4">Smishing Detection: Stay Alert, Protect Your Data</h1>
          <p class="text-gray-600 mb-6">
            Discover the latest techniques to identify and prevent smishing attacks. Our comprehensive guide covers SMS, URL analysis, and social engineering tactics to keep your online activities safe.
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
                <h1 className='text-4xl font-bold text-gray-800 leading-tight mb-4'>Maximize Your Online Security</h1>
                <p className="mt-4 text-muted">
                  Empower yourself with our expert-curated smishing detection resources.From spotting suspicious sms to safeguarding your digital identity.
                </p>
                <div className="row card mt-5 mb-5 bg-white shadow-lg rounded-lg p-8">
                  <div className="col mt-4 mb-4">
                    <div className="row">
                      <h2 className='text-lg font-bold mb-4'>Enter SMS body</h2>
                      <div className="input-group mb-3 mt-3">
                        <textarea
                          className="form-control border-2 border-black"
                          placeholder="paste here"
                          value={smsMessage} // Bind value to state
                          onChange={handleMessageChange} // Update state on change
                          rows="10" // Set the number of rows for the textarea
                          aria-label="Recipient's username"
                        />

                      </div>
                      <div className="col">
                        <div className="btn btn-info text-white" onClick={handleAnalyseClick}>
                          Analyse
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Display the response email or error message */}
                <div className='mb-5'>
                  <div className='card'>
                    {responseMessage ? (
                      <p
                        className={`pt-3 px-4 py-2 rounded-md ${responseMessage.status === "warning"
                            ? "bg-red-500 text-white"
                            : "bg-green-500 text-white"
                          }`}
                      >
                        {responseMessage.status === "warning"
                          ? "This SMS contains potential smishing keywords"
                          : "The SMS is safe"}
                      </p>
                    ) : (
                      <p className="mt-3 text-gray-500">No response or pending...</p>
                    )}



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

export default SmishingPage;
