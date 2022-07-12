import React from "react";
import FetchCategory from "../components/FetchCategory";
import FetchExpenses from "../components/FetchExpenses";
import Register from "../components/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const MainContainer = () => {
  return (
    <>
      <Register />
    </>
  )
}

export default MainContainer;