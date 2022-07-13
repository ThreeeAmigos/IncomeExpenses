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

        <div>



            {Array.from(Array(income.length)).map((number, idx) => {

                return (
                    <div>
                        {income[idx].incomeName} +£{income[idx].amount/100} + {income[idx].date}
                        {/* {income[idx].incomeName} + {income[idx].amount} + {income[idx].date} +{income[idx].personId.name} */}
                        <details>
                            <summary>Edit</summary>
                            <p ><IncomeEdit idx={income[idx]} /></p>
                        </details>

                    </div>
                )
            })
            }
            <br />
        </div>
    )
}

export default Income


