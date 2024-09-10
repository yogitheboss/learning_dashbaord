import React, { useState, useEffect } from "react";
import categoriesData from "../components/flow-chats/data/career-categories.json";
import govJobsData from "../components/flow-chats/data/gov-jobs.json";
import { Link } from "react-router-dom";

const Dash = () => {
  const [categories, setCategories] = useState({});
  // const [govJobs, setGovJobs] = useState({});

  useEffect(() => {
    // Simulate fetching the data (if coming from an API, use fetch or axios)
    setCategories(categoriesData);
    // setGovJobs(govJobsData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 ">
      {/* Career Categories */}
      <div className="container max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Career Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
          {Object.entries(categories).map(([categoryName, careers]) => (
            <div
              key={categoryName}
              className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {categoryName}
              </h2>
              <ul>
                {Object.entries(careers).map(([career, details]) => (
                  <li
                    key={career}
                    className="mb-6 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-700">
                      {career}
                    </h3>
                    <p className="text-gray-600 mb-2">{details.description}</p>
                    <p className="text-gray-600 mb-2">
                      <strong>Skills Needed:</strong>{" "}
                      {details.skills.join(", ")}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Responsibilities:</strong>{" "}
                      {details.responsibilities.join(", ")}
                    </p>
                    <a
                      href={details.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Job Listings
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Government Jobs Categories */}
      <div className="container max-w-6xl mx-auto p-4 mt-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Government Jobs Categories
        </h1>
        {/* You can add government jobs content here similarly */}
      </div>
    </div>
  );
};

export default Dash;
