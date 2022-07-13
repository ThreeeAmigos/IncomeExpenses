import React from "react";
import DashboardExpense from "./DashboardExpense";
import GraphLogIncomeLogExpensesOverTime from "./GraphLogIncomeLogExpensesOverTime";



const Dashboard = () => {


return (
<div>
        <GraphLogIncomeLogExpensesOverTime />
        <DashboardExpense />
</div>
)
}

export default Dashboard;