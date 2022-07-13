import React from "react";
import RegisterPurpose from "./RegisterPurpose";
import RegisterIncome from "./RegisterIncome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import menthe from "../img/menthe.png"


const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid" id="narrow">
        <a class="navbar-brand" href="/dashboard">
          <img src={menthe} width="25"></img> MINTid</a>
        <a class="navbar-brand" href="/expense" color="white">Expenses</a>
        <a class="navbar-brand" href="/income" color="white">Income</a>
        <a class="navbar-brand" href="/target" color="white">Goal</a>
        <a class="navbar-brand" href="/registerPurpose" color="white">Household</a>

      </div>
    </nav>
  );
};

export default Header;
