import React, { useEffect, useState } from "react";
import { getElements } from "../services/TrackerServices";

const FetchExpenses = () => {

  const [expenses, setExpenses] = useState();

  useEffect(() => {
    getElements("expenses")
  }, [])
}

export default FetchExpenses;