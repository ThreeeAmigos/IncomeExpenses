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
import GraphLogIncomeLogExpensesOverTime from '../components/GraphLogIncomeLogExpensesOverTime';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "../components/Footer";
import {Navbar, Nav, Button } from 'react-bootstrap'
import GraphLogIncomeLogExpensesOverTime from "../components/GraphLogIncomeLogExpensesOverTime";


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
        <Link to="/expense">Expense List</Link>
        <Link to="/income">Income List</Link>
        <Link to="/person">Person List</Link>
        <Link to="/graph">Graph Test</Link>
        
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registerPurpose" element={<RegisterPurpose />} />
          <Route path="/registerIncome" element={<RegisterIncome />} />
          <Route path="/registerExpense" element={<RegisterExpense />} />
          <Route path="/category" element={<Category />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/income" element={<Income />} />
          <Route path="/person" element={<Person />} />
          <Route path="/graph" element={<GraphLogIncomeLogExpensesOverTime />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default MainContainer;
