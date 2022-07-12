import React, { useState, useEffect } from "react";
import { getElements } from "../services/TrackerServices";
import { v4 as uuidv4 } from 'uuid';


const RegisterExpenseEach = (person) => {


    const [amount, setAmount] = useState(0)
    const [expensePlace, setExpensePlace] = useState('')
    const [necessityIndex, setNecessityIndex] = useState(0)
    const [expenseName, setExpenseName] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [categoryList, setCategoryList] = useState('')
    const [purposeList, setPurposeList] = useState('')
    const [purpose, setPurpose] = useState('')
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
    const handleNecessityIndex = (event) => {
        setNecessityIndex(parseInt(event.target.value))
    }
    const handleCategoryChange = (event) => {
        setCategoryId( parseInt(event.target.value) )
    }
    const handleNameChange = (event) => {
        setExpenseName(event.target.value)
    }
    const handleDateChange = (event) => {
        setDate(event.target.value)
    }
    const handlePurposeChange = (event) => {
        setPurpose(parseInt(event.target.value))
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
                    necessityIndex: necessityIndex,
                    date: date,
                    directDebit: true,
                    category: { 
                        id: categoryId
                    },
                    person: {
                        id: person.person.id
                    },
                    purpose: {
                        id: purpose
                    }
                })
            })
            const resJson = await res.json()
            if (res.status === 201) {
                setMessage("Direct Debit has been Saved")
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
                <input type="text" onChange={handleNameChange} name="expenseName"  placeholder="What is for" />
                <input type="text" onChange={handlePlaceChange} name="expensePlace"  placeholder="from where" />
                <input type="number" onChange={handleAmountChange} name="amount" placeholder="how much" />
                <select type="number" onChange={handleNecessityIndex} name="necessityIntex" placeholder="how important?" >
                    <option value={1} >1</option>
                    <option value={2} >2</option>
                    <option value={3} >3</option>
                </select>
               
                <input type="date" onChange={handleDateChange} name="date" value={date} />
                <br />
                <label for="category">Category</label>
                <select name="category" onChange={handleCategoryChange}>
                {Array.from(Array(categoryList.length)).map((number, idx) => {

                    return (
                        <option value={categoryList[idx].id} id={uuidv4()}>{categoryList[idx].categoryName}</option>
                    )
                })
                }
                </select>
                <br/>
                <label for="purpose">Purpose</label>
                <select name="purpose" onChange={handlePurposeChange}>
                    {Array.from(Array(purposeList.length)).map((number, idx) => {

                        return (
                            <option value={purposeList[idx].id} id={uuidv4()} >{purposeList[idx].purposeName}</option>
                        )
                    })
                    }
                </select>
                <br />

                <br />
                {message}

                <br />
                <button onClick={handleSubmit()} type="submit">Set a single direct debit</button>
            </form>




        </>
    )

}

export default RegisterExpenseEach