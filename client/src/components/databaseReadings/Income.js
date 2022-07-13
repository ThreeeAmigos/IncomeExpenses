import React, { useEffect, useState } from 'react';
import { getElements } from '../../services/TrackerServices'
import IncomeEdit from './IncomeEdit';

const Income = () => {

    const [income, setIncome] = useState([])

    useEffect(() => {
        getElements("incomes")
            .then(item => setIncome(item))
    }, [])

    console.log(income[0])

    return (

        <div class="align">
            <table >
                <thead>
                    <tr>
                        <th ></th>
                        <th class="column-wide">Where from</th>
                        <th class="column-wide">Amount</th>
                        <th class="column-wide">Date</th>
                        <th class="column-wide">Name</th>
                    </tr>
                </thead>
            </table>

            <table>
                <tbody><tr class="table table-hover">
                    {Array.from(Array(income.length)).map((number, idx) => {

                        return (
                            <>
                                <details>
                                    <summary>
                                        <td class="column">{idx + 1}</td>
                                        <td class="column-wide">{income[idx].incomeName}</td>
                                        <td class="column-wide">£{income[idx].amount / 100}</td>
                                        <td class="column-wide">{income[idx].date}</td>
                                        <td class="column-wide">{income[idx].person.name}</td>
                                    </summary>
                                    <p ><IncomeEdit idx={income[idx]} /></p>

                                </details>

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

export default Income


{/* <details>
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
                                    </details> */}
