import React, { useEffect, useState } from 'react';
import { getElements } from '../../services/TrackerServices'
import ExpenseEdit from './ExpenseEdit';

const Expense = () => {

    const [expense, setExpense] = useState([])


    useEffect(() => {
        getElements("expenses")
            .then(item => setExpense(item))
    }, [])

console.log(expense)

    return (

        <div>



            {Array.from(Array(expense.length)).map((number, idx) => {

                return (
                    <div>
                        {expense[idx].name} + £{expense[idx].amount/100} + {expense[idx].date} + {expense[idx].category.categoryName} +{expense[idx].person.name} + {expense[idx].purpose.purposeName} 
                        <details>
                            <summary>Edit</summary>
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


