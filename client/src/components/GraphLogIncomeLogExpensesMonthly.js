import { useEffect, useState } from 'react'
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Scatter, ScatterChart, ComposedChart, Area, Bar, Line } from 'recharts'
import { getElements } from '../services/TrackerServices'


const GraphLogIncomeLogExpensesMonthly = () => {

    const [expenses, setExpenses] = useState([])
    const [incomes, setIncomes] = useState([])

    useEffect(() => {
        getElements("expenses")
            .then(item => setExpenses(item))
    }, [])

    useEffect(() => {
        getElements("incomes")
            .then(item => setIncomes(item))
    }, [])

    const lnExpenses = expenses.map((element) => {
        console.log(element.amount);
        if (element.amount !== null) {
            element.amount = Math.log(element.amount);
        }
        return element;
    });

    const lnIncomes = incomes.map((element) => {
        console.log(element.amount);
        if (element.amount !== null) {
            element.amount = Math.log(element.amount);
        }
        return element;
    });

    const tally = lnExpenses.reduce((tally, currentExpense) => {
        const monthKey = currentExpense.date.split("-")[1]
        const monthKeyAsMidMonth = `2022-${monthKey}-15`
        const currentTotalForMonth = tally[monthKeyAsMidMonth] || 0
        tally[monthKeyAsMidMonth] = currentTotalForMonth + currentExpense.amount
        return tally
    }, {})

    const expensesByMonth = Object.keys(tally).map(midMonthDate => {
        return { date: midMonthDate, amount: tally[midMonthDate] }
    })

    const incomesWithNewKey = lnIncomes.map(income => ({ ...income, amount2: income.amount, amount: undefined }))
    const allTxsByMonth = expensesByMonth.concat(incomesWithNewKey)
    const allTxsByMonthSorted = allTxsByMonth.sort((tx1, tx2) => Number(tx1.date.replace(/-/g, "")) - Number(tx2.date.replace(/-/g, "")))


    return (
        <>
            <ResponsiveContainer width="99%" aspect={2} >
                <ScatterChart
                    margin={{
                        top: 50,
                        right: 50,
                        left: 50,
                        bottom: 50
                    }}
                    data={allTxsByMonthSorted}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis name="time" dataKey="date" />
                    <YAxis />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    {/* <Legend /> */}
                    {/* <Line  data={expenses} type="category" dataKey="amount" stroke="#8884d8"  />
                    <Line data={incomes} type="category" dataKey="amount" stroke="#82ca9d" /> */}
                    <Scatter dataKey="amount" fill="#8884d8" />
                    <Scatter dataKey="amount2" fill="#82ca9d" />
                </ScatterChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="99%" aspect={2} >
                <ComposedChart margin={{
                    top: 50,
                    right: 50,
                    left: 50,
                    bottom: 50
                }}
                    data={allTxsByMonthSorted}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    {/* <CartesianGrid stroke="#f5f5f5" /> */}
                    {/* <Area type="monotone" dataKey="amount2" fill="#8884d8" stroke="#8884d8" /> */}
                    {/* <Area type="monotone" dataKey="amount2" fill="#8884d8" stroke="#8884d8" /> */}
                    <Bar dataKey="amount" barSize={20} fill="#413ea0" />
                    {/* <Line type="monotone" dataKey="amount2" stroke="#ff7300" /> */}
                    {/* <Scatter dataKey="amount" fill="#8884d8" /> */}
                    <Scatter dataKey="amount2" fill="#82ca9d" />
                </ComposedChart>
            </ResponsiveContainer>
        </>
    )
}