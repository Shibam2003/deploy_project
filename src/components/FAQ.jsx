import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the URL Encoder/Decoder tool work?",
      answer:
        "The URL Encoder/Decoder tool helps convert special characters in a URL to their encoded or decoded equivalents. This is useful for ensuring that a URL is properly formatted for use in web browsers or for security purposes.",
    },
    {
      question: "Can I use these tools for free, or do I need to sign up?",
      answer:
        "Some tools on our website are available for free with limited functionality, while others may require a paid subscription or registration to access additional features and higher usage limits. Please check the specific tool for details.",
    },
    {
      question: "What should I do if I find a phishing or smishing attempt?",
      answer:
        "If you find a phishing or smishing attempt using our tools, report it to the appropriate authorities, such as your local cybercrime unit or the platform being impersonated. You should also avoid clicking any links or providing any personal information.",
    },
    {
      question: "Are these tools legal to use?",
      answer:
        "Yes, our tools are legal to use for ethical purposes such as personal security, awareness, and network management. However, it is important to use them responsibly and not for malicious activities, such as launching attacks on others or unauthorized data collection.",
    },
    {
      question: "How do I use the DNS record lookup tools effectively?",
      answer:
        "To use the DNS record lookup tools, simply enter the domain name you want to check. Our tools will return the relevant DNS records, such as CAA, SOA, and PTR, and help you monitor your domain’s security, configuration, and authenticity.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 w-full px-4 sm:px-6 py-8 sm:py-12 rounded-xl shadow-lg max-w-screen-lg mt-8 mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center"
            >
              <span className="text-base sm:text-lg font-medium">
                {faq.question}
              </span>
              <span className="text-lg sm:text-xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            <div
              className={`mt-3 text-sm sm:text-base text-gray-600 transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-screen" : "max-h-0 overflow-hidden"
              }`}
            >
              {openIndex === index && (
                <p className="pt-2">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
