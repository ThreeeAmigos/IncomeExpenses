import React, { useState, useEffect } from "react";
import { getElements } from "../services/TrackerServices";
import { v4 as uuidv4 } from 'uuid';


const RegisterExpenseEach = (person) => {


    const [amount, setAmount] = useState(0)
    const [expensePlace, setExpensePlace] = useState('')
    const [necessityIntex, setNecessityIntexPlace] = useState(0)
    const [expenseName, setExpenseName] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [categoryList, setCategoryList] = useState('')
    const [purposeList, setPurposeList] = useState('')
    const [date, setDate] = useState()
    const [message, setMessage] = useState('')


    useEffect(() => {
        getElements("categories")
            .then(item => setCategoryList(item))
        getElements("purposes")
            .then(item => setPurposeList(item))
    }, [])

    const handleAmountChange = (event) => {
        setAmount(event.target.value)
    }
    const handlePlaceChange = (event) => {
        setExpensePlace(event.target.value)
    }
    const handleNecessityIntexChange = (event) => {
        setNecessityIntexPlace(event.target.value)
    }
    const handleCategoryChange = (event) => {
        setCategoryId(event.target.value)
    }
    const handleNameChange = (event) => {
        setExpenseName(event.target.value)
    }
    const handleDateChange = (event) => {
        setDate(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch("http://localhost:8080/expenses", {
                method: "POST",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify({
                    name: expenseName,
                    place: expensePlace,
                    amount: amount,
                    necessityIntex: necessityIntex,
                    date: date,
                    directDebit: true,
                    // category: { 
                    //     id: categoryId
                    // },
                    person: {
                        id: person.person.id
                    },
                    // purpose: {
                    //     id: purpose.purpose.id
                    // }
                })
            })
            const resJson = await res.json()
            if (res.status === 201) {
                setMessage("Income has been Saved")
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

            <form onSubmit={handleSubmit}>
                <br />
                <input type="text" onChange={handleNameChange} name="expenseName" id={uuidv4()} placeholder="What is for" />
                <input type="text" onChange={handlePlaceChange} name="expensePlace" id={uuidv4()} placeholder="from where" />
                <input type="number" onChange={handleAmountChange} name="amount" id={uuidv4()} placeholder="how much" />
                <select type="number" onChange={handleNecessityIntexChange} name="necessityIntex" id={uuidv4()} placeholder="how important?" >
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                </select>
                <input type="date" onChange={handleDateChange} name="date" value={date} id={uuidv4()} />
                <select type="number" onChange={handleCategoryChange} name="category" id={uuidv4()}  
                >
                    {/* {Array.from(Array(categoryList.length)).map((number, idx) => {

                        return (
                            <p>{categoryList[idx]}</p>
                        )
                    })
                    }  */}
                    
                </select>
                <br />

                <br />
                {message}

                <br />
                <button onClick={handleSubmit()} type="submit">Set single regular income</button>
            </form>




        </>
    )

}

export default RegisterExpenseEach