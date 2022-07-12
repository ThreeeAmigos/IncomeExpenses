import React, { useEffect, useState } from "react";
import FetchCategory from "../components/FetchCategory";
import FetchExpenses from "../components/FetchExpenses";
import GraphTest from "../components/GraphTest";
import RegisterPage from "../components/RegisterPurpose";
import { expenseData } from "../data/expenseData";
import { incomeData } from "../data/incomeData";



const MainContainer = () => {

  const [expenses, setExpenses] = useState([])
  const [incomes, setIncomes] = useState([])
  
  

  useEffect(() => {
    setExpenses(expenseData)
  },[])

  useEffect(() => {
    setIncomes(incomeData)
  },[])

  return (
    <>
      {/* <RegisterPage />
      <FetchCategory /> */}
      <GraphTest expenses={expenses} incomes={incomes}/>

    </>
  )
}

export default MainContainer;