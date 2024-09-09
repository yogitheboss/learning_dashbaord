import React, { useState, useEffect } from "react";
import categoriesData from "../components/flow-chats/data/career-categories.json";
import govJobsData  from "../components/flow-chats/data/gov-jobs.json";
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
    <div>
      <div className="flex ">
        <Link
          to="/webdev"
          className="flex border rounded-lg bg-slate-400 h-28 w-80 box-border">
          Web developer
        </Link>
        <Link
          to="/webdev"
          className="flex border rounded-lg bg-slate-400 h-28 w-80 box-border">
          UI Designer
        </Link>
      </div>
      <div className="flex">
        <div className="container max-w-[90rem] mx-auto p-4">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Career Categories
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categories).map(([categoryName, careers]) => (
              <div
                key={categoryName}
                className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">{categoryName}</h2>
                <ul>
                  {Object.entries(careers).map(([career, description]) => (
                    <li
                      key={career}
                      className="mb-2 hover:bg-slate-200 hover:cursor-pointer">
                      <h3 className="text-lg font-semibold">{career}</h3>
                      <p className="text-gray-600">{description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Government jobs categories */}
      <div className="flex">
      {/* government job content goes here */}
      </div>
    </div>
  );
};

export default Dash;
