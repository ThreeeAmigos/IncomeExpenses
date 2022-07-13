import { useEffect, useState } from 'react'
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Scatter, ScatterChart, ComposedChart, Area, Bar, Line } from 'recharts'
import { getElements } from '../services/TrackerServices'


const GraphLogIncomeLogExpensesOverTime = () => {

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
        if (element.amount !== null) {
            element.amount = Math.log(element.amount);
        }
        return element;
    });

    const lnIncomes = incomes.map((element) => {
        if (element.amount !== null) {
            element.amount = Math.log(element.amount);
        }
        return element;
    });

    const incomesWithNewKey = lnIncomes.map(income => ({ ...income, amount2: income.amount, amount: undefined }))

    const allTxs = lnExpenses.concat(incomesWithNewKey)
    const allTxsSorted = allTxs.sort((tx1, tx2) => Number(tx1.date.replace(/-/g, "")) - Number(tx2.date.replace(/-/g, "")))


    return (
        <>
            <ResponsiveContainer width="99%" aspect={1.5} >
                <ComposedChart margin={{
                    top: 100,
                    right: 100,
                    left: 50,
                    bottom: 100
                }}
                    data={allTxsSorted}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="amount" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="amount" barSize={20} fill="#413ea0" />
                    <Scatter dataKey="amount2" fill="#82ca9d" />
                </ComposedChart>
            </ResponsiveContainer>
        </>
    )
}

export default GraphLogIncomeLogExpensesOverTime