import React, { useEffect, useState } from 'react';
import { getElements } from '../../services/TrackerServices'
import ExpenseEdit from './ExpenseEdit';

const Expense = () => {

    const [expense, setExpense] = useState([])


    useEffect(() => {
        getElements("expenses")
            .then(item => setExpense(item))
    }, [])

    const handleClick = (event) => {

        return (
            <ExpenseEdit idx={expense[event.target.value]} />
        )
    }

    return (

        <div>

            <table class="align">
                <thead>
                    <tr>
                        <th ></th>
                        <th class="column-wide">What for</th>
                        <th class="column-wide">Amount</th>
                        <th class="column-wide">Date</th>
                        <th class="column-wide">Category</th>
                        <th class="column-wide">Pay By</th>
                        <th class="column-wide">Pay for</th>
                    </tr>
                </thead>
                </table>
                <table class="align">
                <tbody><tr class="table table-hover">
                    {Array.from(Array(expense.length)).map((number, idx) => {
                        return (
                            <>
                                
                                    <details>
                                        <summary>
                                            <td class="column">{idx + 1}</td>
                                        <td class="column-wide">{expense[idx].name}</td>
                                            <td class="column-wide">£{expense[idx].amount / 100}</td>
                                            <td class="column-wide">{expense[idx].date}</td>
                                            <td class="column-wide">{expense[idx].category.categoryName}</td>
                                            <td class="column-wide">{expense[idx].person.name}</td>
                                            <td class="column-wide">{expense[idx].purpose.purposeName}</td>
                                        </summary>
                                        <p ><ExpenseEdit idx={expense[idx]} /></p>
                                    </details>
                                
                                {/* <td colspan="7">
                                        <details>
                                            <summary>Edit</summary>
                                            <p ><ExpenseEdit idx={expense[idx]} /></p>
                                        </details>
                                    </td> */}


                            </>
                        )

                    })
                    }
                </tr>
                </tbody>

            </table>
            <br />
        </div>
    )
}

export default Expense


