import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse"; // CSV parsing library
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table"; // Import ShadCN table components
import { Button } from "./ui/button";
import { useCoursesStore } from "@/store/courses";
import { useTheme } from "./theme";
import Instructions from "./instructions";

const CsvUploadForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [csvFile, setCsvFile] = useState(null);
  const [parsedData, setParsedData] = useState([]);
  const [fileName, setFileName] = useState(""); // State for storing the file name
  const { theme } = useTheme();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "text/csv": [".csv"] },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setCsvFile(file);
      setFileName(file.name); // Update the file name state
      parseCsv(file);
    },
  });

  const parseCsv = (file) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const jsonData = convertToHierarchy(results.data); // Convert to JSON hierarchy
        setParsedData(jsonData); // Update the state with hierarchical JSON data
      },
    });
  };

  const convertToHierarchy = (data) => {
    const result = [];
    let currentTopic = null;

    data.forEach((row) => {
      // If the Topic column is not empty and does not start with a comma, a new topic starts
      if (row.Topic && !row.Topic.startsWith(",")) {
        currentTopic = {
          topic: row.Topic.replace(/^[0-9]+\. /, "").trim(),
          subtopics: [],
        };
        result.push(currentTopic);
      }

      // If a subtopic is provided, add it under the current topic
      if (row.Subtopic && currentTopic) {
        const currentSubtopic = {
          name: row.Subtopic.trim(),
          resources: [],
        };
        currentTopic.subtopics.push(currentSubtopic);

        // Add resources to the current subtopic
        if (row.Resources) {
          // Split the resource title and link if necessary
          const [title, link] = row.Resources.split("|").map((s) => s.trim());
          currentSubtopic.resources.push({
            title: title || "",
            link: link || "",
          });
        }
      }
    });

    return result;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name && description && duration && csvFile) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("duration", duration);
      formData.append("fileName", fileName);
      formData.append("file", JSON.stringify(parsedData, null, 2)); // Append the CSV file to formData

      useCoursesStore.getState().storeCourse(formData); // Send the formData to your store function
    } else {
      alert("Please fill in all fields and upload a CSV file.");
    }
  };
  const inputClasses = `mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
    theme === "dark"
      ? "border-gray-600 bg-gray-800 text-white focus:ring-blue-400"
      : "border-gray-300 bg-white text-gray-900 focus:ring-blue-500"
  }`;

  return (
    <div>
      <Instructions />
      <form
        onSubmit={handleSubmit}
        className={`max-w-md mx-auto p-6 ${
          theme === "light" ? "bg-white" : "bg-black"
        } rounded-lg shadow-md sm:w-full md:w-[500px]`}
      >
        <h2 className="text-xl text-center font-bold mb-6">
          Upload CSV and Provide Details
        </h2>

        {/* CSV Upload Section */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed p-6 rounded-md cursor-pointer text-center ${
            isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-blue-500">Drop the CSV file here ...</p>
          ) : (
            <p className="text-gray-500">
              Drag and drop a CSV file here, or click to select one.
            </p>
          )}
        </div>

        {/* File Name Display */}
        {fileName && (
          <p className="mt-2 text-gray-700">
            Selected file: <strong>{fileName}</strong>
          </p>
        )}

        {/* Name Input */}
        <div className="mt-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
            placeholder="Enter your name"
          />
        </div>

        {/* Description Input */}
        <div className="mt-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={inputClasses}
            rows="3"
            placeholder="Enter a description"
          />
        </div>

        {/* Duration Input */}
        <div className="mt-4">
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700"
          >
            Duration
          </label>
          <input
            type="text"
            id="duration"
            value={duration}
            onChange={(e) => {
              // Allow only numbers and a maximum of 3 characters
              if (/^\d{0,3}$/.test(e.target.value))
              {
                setDuration(e.target.value)
              }else{
                alert("Please enter a valid number")
              }
             }}
            className={inputClasses}
            placeholder="Enter the duration"
          />
        </div>

        {/* Submit Button */}
        <Button
          disabled={!name || !description || !duration || !csvFile}
          type="submit"
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </Button>
      </form>

      {/* Table Display of Parsed CSV Data */}
      {/* {parsedData.length > 0 && (
        <div className="mt-8 max-w-4xl mx-auto">
          <h3 className="text-lg font-bold mb-4">Parsed CSV Data</h3>
          <Table>
            <TableCaption>A summary of the uploaded CSV file.</TableCaption>
            <TableHeader>
              <TableRow>
                {Object.keys(parsedData[0]).map((key) => (
                  <TableHead key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {parsedData.map((row, index) => (
                <TableRow key={index}>
                  {Object.values(row).map((value, i) => (
                    <TableCell key={i}>{value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )} */}
    </div>
  );
};

export default CsvUploadForm;
