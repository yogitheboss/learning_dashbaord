import React from "react";

const Instructions = () => {
  return (
    <div>
      <p className="text-gray-600 mt-4 text-center">
        Please upload a CSV file below. Make sure the format matches the
        expected structure. You can refer to the format guidelines by clicking
        the link below.
      </p>
      <div className="text-center mb-4">
        <a
          href="https://example.com/csv-format-guide"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          CSV Format Guide
        </a>
      </div>
    </div>
  );
};

export default Instructions;
