import React from "react";
import Register from "../components/Register";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import RegisterPurpose from "../components/RegisterPurpose";
import RegisterIncome from "../components/RegisterIncome";
import RegisterExpense from "../components/RegisterExpense";
import Category from "../components/databaseReadings/Category";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "../components/Footer";


const MainContainer = () => {
  return (
    <>
      <Header />
      <Router>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/registerPurpose">Register Purpose</Link>
        <Link to="/registerIncome">Register Income</Link>
        <Link to="/registerExpense">Register Expense</Link>
        <Link to="/category">Set Categories</Link>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registerPurpose" element={<RegisterPurpose />} />
          <Route path="/registerIncome" element={<RegisterIncome />} />
          <Route path="/registerExpense" element={<RegisterExpense />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default MainContainer;
