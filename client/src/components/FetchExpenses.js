import React, { useEffect, useState } from "react";

const FetchExpenses = () => {

  const [expenses, setExpenses] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/expenses")
    .then(response => response.json())
    .then(data => console.log(data));
  }, [])
}

export default FetchExpenses;