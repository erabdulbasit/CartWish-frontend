import axios from "axios";
// import config from "../config.json";

// Access the variable using Vite's special object
const backendURL = import.meta.env.VITE_API_URL;

export default axios.create({
  //baseURL: `${config.backendURL}/api`,
  // If using Vite:
  baseURL: `${backendURL}/api`,
});
