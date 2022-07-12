import React, { useEffect, useState } from 'react';
import { getElements } from '../../services/TrackerServices'
import ExpenseEdit from './ExpenseEdit';

const Expense = () => {

    const [expense, setExpense] = useState([])
    const [message, setMessage] = useState('')
    const [newExpenseName, setNewExpenseName] = useState('')


    const fetchData = () => {
        getElements("expenses")
            .then(item => setExpense(item))
    }



    return (

        <div>



            {Array.from(Array(expense.length)).map((number, idx) => {

                return (
                    <div>

                        <details>
                            <summary>{expense[idx].expenseName}</summary>
                            <p ><ExpenseEdit idx={expense[idx]} /></p>
                        </details>

                    </div>
                )
            })
            }


            <br />
        </div>
    )
}

export default Expense


