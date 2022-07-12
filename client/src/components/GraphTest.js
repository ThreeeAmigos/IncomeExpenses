import { useEffect, useState } from 'react'
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Scatter, ScatterChart } from 'recharts'
import { getElements } from '../services/TrackerServices'


const GraphTest = () => {

    const [expenses, setExpenses] = useState([])
    const [incomes, setIncomes] = useState([])

    useEffect(()=>{
        getElements("expenses")
            .then(item => setExpenses(item))
    }, [])

    useEffect(()=>{
        getElements("incomes")
            .then(item => setIncomes(item))
    }, [])



    if (expenses[0] && incomes[0]) {

        const expensesAmountPounds = expenses.map((expense, index) => {
            return expense.amount/100
        })
        console.log('expensesAmountPounds', expensesAmountPounds)

        const expensesTally = (expenses) =>{
            let expenseTallyPounds = 0
            expenses.forEach(expense => {
                expenseTallyPounds += expense.amount/100
            });
            return expenseTallyPounds
            // console.log('Expense Tally', expenseTallyPounds)
        }

        expensesTally(expenses)

        const incomeAmountPounds = incomes.map((income, index) =>{
            return income.amount/100
        })
        console.log('incomeAmountPounds', incomeAmountPounds)

        const incomesTally = (incomes) =>{
            let incomeTallyPounds = 0
            incomes.forEach(income => {
                incomeTallyPounds += income.amount/100
            });
            return incomeTallyPounds
            // console.log('Income Tally', incomeTallyPounds)
        }

        incomesTally(incomes)

        const savingsTally = () => {
            return incomesTally(incomes) - expensesTally(expenses)
        }

        
    }

    const incomesWithNewKey = incomes.map(income => ({...income, amount2: income.amount, amount: undefined}))
    const allTxs = expenses.concat(incomesWithNewKey)
    const allTxsSorted = allTxs.sort((tx1, tx2) => Number(tx1.date.replace(/-/g, "")) - Number(tx2.date.replace(/-/g, "")))
    const allTxsSortedPounds = allTxsSorted.map(txn => ({...txn, amount: txn.amount/100}))

    console.log('look here', allTxsSortedPounds)


    


    return (
        <>
            <ResponsiveContainer width="99%" aspect={2} >
                <ScatterChart 
                    margin={{ 
                        top: 50, 
                        right: 50, 
                        left: 50, 
                        bottom: 50 }}
                        data={allTxsSorted}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis  name="time" dataKey="date" />
                    <YAxis />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }}/>
                    {/* <Legend /> */}
                    {/* <Line  data={expenses} type="category" dataKey="amount" stroke="#8884d8"  />
                    <Line data={incomes} type="category" dataKey="amount" stroke="#82ca9d" /> */}
                    <Scatter  dataKey="amount" fill="#8884d8"  />
                    <Scatter  dataKey="amount2" fill="#82ca9d" />
                </ScatterChart>
            </ResponsiveContainer>
        </>
    )
}

export default GraphTest