import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HotelList from "./components/HotelList"; 
import PropertyPage from "./components/PropertyPage"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HotelList />} />
        
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
