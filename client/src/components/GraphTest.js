import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'
import createTrend from 'trendline'



const GraphTest = ({expenses, incomes}) => {

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
            console.log('Savings Tally', incomesTally(incomes) - expensesTally(expenses) )
            return incomesTally(incomes) - expensesTally(expenses)
        }

        savingsTally()
    }



    return (
        <>
            {/* <ResponsiveContainer width="90%" height={300}> */}
            <LineChart width={730} height={500}
                margin={{ top: 50, right: 30, left: 20, bottom: 5 }}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis  name="time" dataKey="date" />
                <YAxis dataKey="amount"/>
                <Tooltip />
                <Legend />
                <Line  data={expenses} type="function" dataKey="amount" stroke="#8884d8"  />
                <Line data={incomes} type="category" dataKey="amount" stroke="#82ca9d" />
            </LineChart>
            {/* </ResponsiveContainer> */}
        </>
    )
}

export default GraphTest