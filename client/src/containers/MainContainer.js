import React from "react";
import FetchCategory from "../components/FetchCategory";
import FetchExpenses from "../components/FetchExpenses";
import Register from "../components/Register";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "../components/Footer";

const MainContainer = () => {
  return (
    <>
      <Header />
      <Register />
      <Dashboard />
      <Footer />
    </>
  );
};

export default MainContainer;
