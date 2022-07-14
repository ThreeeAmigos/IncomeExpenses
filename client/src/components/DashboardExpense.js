import React, { useState, useEffect } from "react";
import { getElements } from "../services/TrackerServices";
import { v4 as uuidv4 } from 'uuid';
import { Navbar, Nav, Button, Container } from "react-bootstrap";

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
    const [directDebit, setDirectDebit] = useState(true)



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

    const handleDirectDebitChange = (event) => {
        setDirectDebit(Boolean(event))
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
                    amount: amount*100,
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

        <div >

            <form className="align" onSubmit={handleSubmit}>
            <h1>You been spending again?</h1>
                <br />
                <input className="form-control" type="text" onChange={handleNameChange} name="expenseName" placeholder="What did you buy then?" required />
                <br />
                <input className="form-control" type="text" onChange={handlePlaceChange} name="expensePlace" placeholder="from where" required />
                <br />
                <input className="form-control" type="number" onChange={handleAmountChange} name="amount" placeholder="What was the damage?"  required />
                <label className="form-label mt-4">Essential, was it?</label>
                <fieldset className="form-control">
                    <label className="form-check-label" >
            
                        <input className="form-check-input" type="radio" id="index1" onChange={handleNecessityIndex} name="necessityIntex" required value={1} /> 1: you can't live without &nbsp;&nbsp;</label>
                        <br/>
                    <label className="form-check-label" >
                        <input className="form-check-input" type="radio" onChange={handleNecessityIndex} name="necessityIntex" required value={2} />  2: paying for a haircut etc &nbsp;&nbsp;</label>
                        <br/>
                    <input className="form-check-input" type="radio" id="index3" onChange={handleNecessityIndex} name="necessityIntex" required value={3} /> <label for="index3">  3: is just plain naughty and you know it &nbsp;&nbsp;</label>

                </fieldset>
                <br />

                <div className="form-group">
                    <input className="form-control" type="date" onChange={handleDateChange} name="date" value={date} required />
                    <br />
                    <label className="form-label mt-4" for="category">Category</label>
                    <select className="form-select" name="category" onChange={handleCategoryChange} required>
                        {Array.from(Array(categoryList.length)).map((number, idx) => {
                            return (
                                <option value={categoryList[idx].id} id={uuidv4()} placeholder="Category">{categoryList[idx].categoryName}</option>
                            )
                        })
                        }
                    </select>
                    <select class="btn btn-outline-primary" name="directDebit" onChange={handleDirectDebitChange} required>
                        <option value="true">Direct Debit</option>
                        <br/>
                        <option value="false">One-Off</option>
                    </select>
                    <br />

                    <p>Whose account?</p>
                    <div class="form-control">

                        {Array.from(Array(personList.length)).map((number, idx) => {

                            return (
                                <div>

                                    <input type="radio" name="person" id="person" className="form-check-input" onChange={handlePersonChange} required value={personList[idx].id} /><label for="person">&nbsp;{personList[idx].name}'s&nbsp;&nbsp;</label>

                                </div>
                            )
                        })
                        }
                    </div>
                    <br />
                    <br />

                    <label for="purpose">Who was this actually for?<br />&nbsp;&nbsp;</label>
                    <div className="form-control">

                        {Array.from(Array(purposeList.length)).map((number, idx) => {
                            return (
                                <div >
                                    <input type="radio" className="form-check-input" name="purpose" id="purpose" onChange={handlePurposeChange} required value={purposeList[idx].id} /><label for="purpose">&nbsp;&nbsp;{purposeList[idx].purposeName}&nbsp;&nbsp;</label>
                                </div>
                            )
                        })
                        }</div>
                    <br />
                    <br />
                    {message}

                    <br />
                </div>
                <button className="btn btn-primary" onClick={handleSubmit()} type="submit">Add expense</button>
            </form>

        </div>
    )
}

export default DashboardExpense;