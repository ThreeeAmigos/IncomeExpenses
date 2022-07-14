import React, { useEffect, useState } from 'react';
import { getElements } from '../../services/TrackerServices'
import ExpenseEdit from './ExpenseEdit';

const ExpenseNec = () => {

    const [expense, setExpense] = useState([])


    useEffect(() => {
        getElements("expenses?necessityindex=3")
            .then(item => setExpense(item))
    }, [])

    const handleClick = (event) => {

        return (
            <ExpenseEdit idx={expense[event.target.value]} />
        )
    }

    return (
        <>
            <div className="container-fluid" id="top">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active"><a href="/expenseNec1">NI 1</a></li>
                    <li className="breadcrumb-item active"><a href="/expenseNec2">NI 2</a></li>
                    <li className="breadcrumb-item active"><a href="/expenseNec3">NI 3</a></li>
                </ol>
            </div>

        <div className="center">

            <h1>Expense</h1>
            <table >
                <thead>
                    <tr>
                        <th ></th>
                        <th className="column-wide">What for</th>
                        <th className="column-wide">Amount</th>
                        <th className="column-wide">Date</th>
                        <th className="column-wide">Category</th>
                        <th className="column-wide">Pay By</th>
                        <th className="column-wide">Pay for</th>
                        <th className="column-wide">How Important</th>
                    </tr>
                </thead>
            </table>
            <table >
                <tbody><tr className="table table-hover">
                    {Array.from(Array(expense.length)).map((number, idx) => {
                        return (
                            <>

                                <details>
                                    <summary>
                                        <td className="column">{idx + 1}</td>
                                        <td className="column-wide">{expense[idx].name}</td>
                                        <td className="column-wide">£{expense[idx].amount / 100}</td>
                                        <td className="column-wide">{expense[idx].date}</td>
                                        <td className="column-wide">{expense[idx].category.categoryName}</td>
                                        <td className="column-wide">{expense[idx].person.name}</td>
                                        <td className="column-wide">{expense[idx].purpose.purposeName}</td><td className="column-wide">{expense[idx].necessityIndex}</td>
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
        </>
    )
}

export default ExpenseNec


