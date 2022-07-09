import React from "react";
import FetchCategory from "../components/FetchCategory";
import FetchExpenses from "../components/FetchExpenses";
import RegisterPage from "../components/RegisterPage";

const MainContainer = () => {
  return (
    <>
      <RegisterPage />
      <FetchCategory />

    </>
  )
}

export default MainContainer;