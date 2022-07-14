import React, { useEffect, useState } from "react";
// import Register from "../components/Register";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import RegisterPurpose from "../components/RegisterPurpose";
import RegisterIncome from "../components/RegisterIncome";
import RegisterExpense from "../components/RegisterExpense";
import Category from "../components/databaseReadings/Category";
import Expense from "../components/databaseReadings/Expense";
import ExpenseNec1 from "../components/databaseReadings/ExpenseNec1";
import ExpenseNec2 from "../components/databaseReadings/ExpenseNec2";
import ExpenseNec3 from "../components/databaseReadings/ExpenseNec3";
import { getElements } from "../services/TrackerServices";

import Income from "../components/databaseReadings/Income";
import Target from "../components/databaseReadings/Target";
import Person from "../components/databaseReadings/Person";
import Setup from "../components/Setup";
import Main from "../components/Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Navbar, Nav, Button } from 'react-bootstrap'
import GraphLogIncomeLogExpensesOverTime from "../components/GraphLogIncomeLogExpensesOverTime";


const MainContainer = () => {


  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Main />} />
          <Route path="/registerPurpose" element={<RegisterPurpose />} />
          <Route path="/registerIncome" element={<RegisterIncome />} />
          <Route path="/registerExpense" element={<RegisterExpense />} />
          <Route path="/category" element={<Category />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/expenseNec1" element={<ExpenseNec1 />} />
          <Route path="/expenseNec2" element={<ExpenseNec2 />} />
          <Route path="/expenseNec3" element={<ExpenseNec3 />} />
          <Route path="/income" element={<Income />} />
          <Route path="/person" element={<Person />} />
          <Route path="/graph" element={<GraphLogIncomeLogExpensesOverTime />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/target" element={<Target />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default MainContainer;
