import AOS from "aos";
import "aos/dist/aos.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

AOS.init({
  duration: 1000,
  once: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer position="top-right" autoClose={3000} theme="dark" />
  </>,
);
