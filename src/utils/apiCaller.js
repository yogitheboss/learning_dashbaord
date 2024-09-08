import { useUserStore } from "@/store/user";
import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:3000/api", // Set your base URL here
  timeout: 10000, // Set a timeout for requests (in milliseconds)
  headers: {
    "Content-Type": "application/json",
  },
});

// API Caller Function
const apiCaller = async (
  method,
  url,
  data = null,
  params = null,
  headers = {}
) => {
  const token = useUserStore.getState().token;
  try {
    const response = await api({
      method,
      url,
      data,
      params,
      headers: {
        ...api.defaults.headers,
        Authorization: token ? `Bearer ${token}` : "",
        ...headers,
      }, // Merge default headers with custom headers
    });
    return response.data; // Return response data
  } catch (error) {
    // Error handling
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Error Response:", error.response.data);
      throw error.response.data; // Throw the response error to be handled by the caller
    } else if (error.request) {
      // Request was made but no response received
      console.error("No Response:", error.request);
      throw new Error("No response from server. Please try again later.");
    } else {
      // Something else caused an error
      console.error("Error:", error.message);
      throw new Error("An error occurred. Please try again.");
    }
  }
};

export default apiCaller;
