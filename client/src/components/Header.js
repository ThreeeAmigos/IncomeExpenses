import React from "react";
import RegisterPurpose from "./RegisterPurpose";
import RegisterIncome from "./RegisterIncome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import menthe from "../img/menthe.png"


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid" id="narrow">
        <a className="navbar-brand" href="/dashboard">
          <img src={menthe} width="25"></img> MINTid</a>
        <a className="navbar-brand" href="/expense" color="white">Expense</a>
        <a className="navbar-brand" href="/income" color="white">Income</a>
        <a className="navbar-brand" href="/target" color="white">Goal</a>
        <a className="navbar-brand" href="/registerPurpose" color="white">Household</a>


      </div>
    </nav>
  );
};

export default Header;
