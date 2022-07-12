import React, { useState, useEffect } from "react";
import { getElements } from "../services/TrackerServices";
import { v4 as uuidv4 } from 'uuid';

const DashboardExpense = () => {

    const [amount, setAmount] = useState(0)
    const [expensePlace, setExpensePlace] = useState('')
    const [necessityIndex, setNecessityIndex] = useState(0)
    const [expenseName, setExpenseName] = useState('')
    const [categoryList, setCategoryList] = useState('')
    const [categoryId, setCategoryId] = useState(1)
    const [purposeList, setPurposeList] = useState('')
    const [personList, setPersonList] = useState('')
    const [purpose, setPurpose] = useState('')
    const [date, setDate] = useState()
    const [person, setPerson] = useState()
    const [message, setMessage] = useState('')


    useEffect(() => {
        getElements("categories")
            .then(item => setCategoryList(item))
        getElements("purposes")
            .then(item => setPurposeList(item))
        getElements("persons")
            .then(item => setPersonList(item))
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
        setCategoryId(parseInt(event.target.value))
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

    const handlePersonChange = (event) => {
        setPerson(parseInt(event.target.value))
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
                    directDebit: false,
                    category: {
                        id: categoryId
                    },
                    person: {
                        id: person
                    },
                    purpose: {
                        id: purpose
                    }
                })
            })
            const resJson = await res.json()
            if (res.status === 201) {
                setMessage("Saved")
            } else {
                setMessage("Error")
            }
        }
        catch (err) {
            console.log(err)
        }
    }


    return (

        <div>

            <form onSubmit={handleSubmit}>
                <br />
                <input type="text" onChange={handleNameChange} name="expenseName" placeholder="What is for" required />
                <input type="text" onChange={handlePlaceChange} name="expensePlace" placeholder="from where" required />
                <input type="number" onChange={handleAmountChange} name="amount" placeholder="how much" required />
                <p>How important is this purchase:</p>
                <input type="radio" id="index1" onChange={handleNecessityIndex} name="necessityIntex" required value={1} /><label for="index1">1</label>
                <input type="radio" id="index2" onChange={handleNecessityIndex} name="necessityIntex" required value={2} /><label for="index2">2</label>
                <input type="radio" id="index3" onChange={handleNecessityIndex} name="necessityIntex" required value={3} /><label for="index3">3</label>
                <br />

                <input type="date" onChange={handleDateChange} name="date" value={date} required />
                <br />
                <label for="category">Category</label>
                <select name="category" onChange={handleCategoryChange} required>
                    {Array.from(Array(categoryList.length)).map((number, idx) => {
                        return (
                            <option value={categoryList[idx].id} id={uuidv4()} placeholder="Category">{categoryList[idx].categoryName}</option>
                        )
                    })
                    }
                </select>
                <br />
                <p>Who Pay</p>
        
                    {Array.from(Array(personList.length)).map((number, idx) => {

                        return (
                            <>
                                <input type="radio" name="person" id="person" onChange={handlePersonChange} required value={personList[idx].id} /><label for="person">{personList[idx].name}</label>
                            </>
                        )
                    })
                    }
                
                <p for="purpose">Who For</p>
                    {Array.from(Array(purposeList.length)).map((number, idx) => {
                        return (
                            <>
                                <input type="radio" name="purpose" id="purpose" onChange={handlePurposeChange} required value={purposeList[idx].id} /><label for="purpose">{purposeList[idx].purposeName}</label>
                            </>
                        )
                    })
                    }
                <br />

                <br />
                {message}

                <br />
                <button onClick={handleSubmit()} type="submit">Add expense</button>
            </form>

        </div>
    )
}

export default DashboardExpense;