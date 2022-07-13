import React from "react";
// import Register from "../components/Register";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import RegisterPurpose from "../components/RegisterPurpose";
import RegisterIncome from "../components/RegisterIncome";
import RegisterExpense from "../components/RegisterExpense";
import Category from "../components/databaseReadings/Category";
import Expense from "../components/databaseReadings/Expense";
import Income from "../components/databaseReadings/Income";
import Person from "../components/databaseReadings/Person";
import GraphTest from '../components/GraphTest';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "../components/Footer";
import {Navbar, Nav, Button } from 'react-bootstrap'


const MainContainer = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registerPurpose" element={<RegisterPurpose />} />
          <Route path="/registerIncome" element={<RegisterIncome />} />
          <Route path="/registerExpense" element={<RegisterExpense />} />
          <Route path="/category" element={<Category />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/income" element={<Income />} />
          <Route path="/person" element={<Person />} />
          <Route path="/graph" element={<GraphTest />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default MainContainer;
