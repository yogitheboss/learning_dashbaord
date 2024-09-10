import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

function Sidebar({ nodeData, onClose }) {
  const [geminiResponse, setGeminiResponse] = useState(""); // State for AI response
  const [loading, setLoading] = useState(false); // State for loading indicator

  useEffect(() => {
    if (nodeData && nodeData.label) {
      fetchGeminiResponse(nodeData.label); // Fetch AI response when sidebar opens
    }
  }, [nodeData]);

  const fetchGeminiResponse = async (label) => {
    console.log(label,"label")
    setLoading(true); // Start loading
    try {
      const response = await fetch("http://localhost:5000/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: label }), // Send label as the prompt
      });
      const result = await response.text(); // Get the AI-generated content
      setGeminiResponse(result); // Set the response in state
    } catch (err) {
      setGeminiResponse("Error: " + err.message); // Handle error case
    } finally {
      setLoading(false); // End loading
    }
  };

  if (!nodeData) return null; // Do not render if no node data

  const resources = nodeData.resources;

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 overflow-y-auto z-50">
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl"
        onClick={onClose}
      >
        <IoCloseOutline />
      </button>
      <h2 className="text-2xl font-bold text-black mb-4">{nodeData.label}</h2>
      <div className="text-sm text-black flex flex-col space-y-4">
        {resources?.map((res, index) => (
          <div key={index}>
            <div className="font-medium">{res.title}</div>
            <a
              href={res.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              {res.link}
            </a>
          </div>
        ))}
      </div>

      {/* Gemini AI response */}
      <div className="mt-6">
        {loading ? (
          <p>Loading AI response...</p>
        ) : geminiResponse ? (
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Gemini Response:</h3>
            <p className="text-sm">{geminiResponse}</p>
          </div>
        ) : (
          <p>No AI response available.</p>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
