import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const RegisterCurrentBalance = (userList) => {


    const [inputSavingCount, setInputSavingCount] = useState(0)
    const [inputDebtCount, setInputDebtCount] = useState(0)
    const [totalSavings, setTotalSavings] = useState(0)
    const [totalDebts, setTotalDebts] = useState(0)
    const [message, setMessage] = useState('')

    let savingTotal = 0
    let debtTotal = 0



    const handleSavingClick = () => {
        setInputSavingCount(inputSavingCount + 1);
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

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch("http://localhost:8080/persons", {
                method: "POST",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify({
                    name: userList.userList.purposeName,
                    loan: totalDebts,
                    currentPosition: totalSavings - totalDebts,
                    household: {
                        id: 1
                    }
                }

                )

            })

            const resJson = await res.json()
            if (res.status === 201) {
                setMessage("User Saved")
            } else {
                setMessage("Error")
            }
        }
        catch (err) {
            console.log(err)
        }

    }


    return (
        <>
        
            <button class="btn btn-outline-primary" onClick={handleSavingClick}> add current balance </button>
            {Array.from(Array(inputSavingCount)).map((number, index) => {
                return (<div >
                       <input type="number" onChange={handleChange} name="saving" id={index} />
                    </div>
                   )
            })}

            <br />
            <br />

            <button class="btn btn-outline-primary" onClick={handleDebtClick}> add current debt </button>
            {Array.from(Array(inputDebtCount)).map((number, index) => {
                return (
                    <>
                        <br />
                        <input type="number" onChange={handleDebtChange} name="debt" id={index} />
                    </>
                )
            })}
            <form onSubmit={handleSubmit}>
            
                <br />
                <div>Total Savings: {totalSavings} </div>
                <br/>
                <div>Total Debts: {totalDebts} </div>
                <br />
                <div>Total Current Balance: {totalSavings - totalDebts} </div>
                <br />
                <div>This is for {userList.userList.purposeName}</div>
                <br />
                <button class="btn btn-outline-primary" onClick={handleSubmit} type="submit">Set {userList.userList.purposeName}'s Account</button>
                <br />
                
                {message}
            </form>

            {/* 
                    
                    for (let i = 0; i < userList.length; i++) {
            return userList[i].name
            }
        }
                    
                     */}
        </>
    )

}

export default RegisterCurrentBalance