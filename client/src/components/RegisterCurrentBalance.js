import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const RegisterCurrentBalance = () => {


    const [inputCount, setInputCount] = useState(0)
    const [inputDebtCount, setInputDebtCount] = useState(0)
    const [totalSavings, setTotalSavings] = useState(0)
    const [totalDebts, setTotalDebts] = useState(0)

    let savingTotal = 0
    let debtTotal = 0
    

    const handleClick = () => {
        setInputCount(inputCount + 1);
    }
    const handleDebtClick = () => {
        setInputDebtCount(inputDebtCount + 1);
    }

    const handleChange = (event) => {
        let savingArray = document.getElementsByName("saving")
        for (let i = 0; i < savingArray.length; i++) {
            if (parseInt(savingArray[i].value) > 0) {
                savingTotal += parseInt(savingArray[i].value)
            }
        }
        setTotalSavings(savingTotal)
    }

    const handleDebtChange = (event) => {
        let debtArray = document.getElementsByName("debt")
        for (let i = 0; i < debtArray.length; i++) {
            if (parseInt(debtArray[i].value) > 0) {
                debtTotal += parseInt(debtArray[i].value)
            }
        }
        setTotalDebts(debtTotal)
    }

        return (
            <>
                <button onClick={handleClick}> add current balance </button>
                {Array.from(Array(inputCount)).map((number, index) => {
                    return (
                        <>
                            <br />
                            <input type="number" onChange={handleChange} name="saving" id={index} />
                        </>
                    )

                }

                )
                }
                <br />
                <button onClick={handleDebtClick}> add current debt </button>
                {Array.from(Array(inputDebtCount)).map((number, index) => {
                    return (
                        <>
                            <br />
                            <input type="number" onChange={handleDebtChange}  name="debt" id={index} />
                        </>
                    )
                })}
                <div>Total Savings: {totalSavings} </div>
                <div>Total Debts: {totalDebts} </div>
                <div>Total Current Balance: {totalSavings - totalDebts} </div>


            </>
        )
    
}

export default RegisterCurrentBalance