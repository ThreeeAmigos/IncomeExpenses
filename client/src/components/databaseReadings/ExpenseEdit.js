import React, { useEffect, useState } from 'react';
import { getElements } from '../../services/TrackerServices'

const ExpenseEdit = (idx) => {


    const [expenseName, setExpenseName] = useState('')
    const [expense, setExpense] = useState('')
    const [message, setMessage] = useState('')
    const [deleteMessage, setDeleteMessage] = useState('')
    const [amount, setAmount] = useState(0)
    const [expensePlace, setExpensePlace] = useState('')
    const [necessityIndex, setNecessityIndex] = useState(0)
    const [categoryList, setCategoryList] = useState('')
    const [categoryId, setCategoryId] = useState(1)
    const [purposeList, setPurposeList] = useState('')
    const [personList, setPersonList] = useState('')
    const [purpose, setPurpose] = useState('')
    const [date, setDate] = useState()
    const [directDebit, setDirectDebit] = useState(true)
    const [person, setPerson] = useState()

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



    const fetchData = () => {
        getElements("expenses")
            .then(item => setExpense(item))
    }


    useEffect(() => {
        fetchData()
    }, [])

    const dUrl = "http://localhost:8080/expenses/?id="

    const handleDelete = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch(dUrl + idx.idx.id, {
                method: "DELETE"
            })

            const resJson = await res.json()
            if (res.status === 202) {
                setDeleteMessage("Expense DELETED")
            } else {
                setDeleteMessage("Error")
            }
            fetchData()
        }
        catch (err) {
            console.log(err)
        }

    }

    

    const url = "http://localhost:8080/expenses/"
    const handleSubmit = async (event) => {
        
        event.preventDefault()
        fetchData()
        try {
            const res = await fetch(url + idx.idx.id, {
                method: "PUT",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify({
                    name: expenseName,
                    place: expensePlace,
                    amount: amount*100,
                    necessityIndex: necessityIndex,
                    date: date,
                    directDebit: directDebit,
                    category: {
                        id: categoryId
                    },
                    person: {
                        id: person.person.id
                    },
                    purpose: {
                        id: purpose
                    }
                }
                )
            })

            const resJson = await res.json()
            if (res.status === 202) {
                setMessage("Expense Changed")
            } else {
                setMessage("Error")
            }
        }
        catch (err) {
            console.log(err)
        }
        fetchData()

    }

    const handleExpenseChange = (event) => {
        setExpenseName(event.target.value)
        fetchData()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <br />
                <input class="form-control" type="text" onChange={handleNameChange} name="expenseName" placeholder="What you buy then?" required />
                <input class="form-control" type="text" onChange={handlePlaceChange} name="expensePlace" placeholder="Where from?" required />
                <input class="form-control" type="number" onChange={handleAmountChange} name="amount" placeholder="What was the damage?" required />
                <label class="form-label mt-4">Essential, was it?</label>
                <fieldset class="form-control">
                    <label class="form-check-label" >
                        <input class="form-check-input" type="radio" id="index1" onChange={handleNecessityIndex} name="necessityIntex" required value={1} /> 1: you can't live without &nbsp;&nbsp;</label>
                    <label class="form-check-label" >
                        <input class="form-check-input" type="radio" onChange={handleNecessityIndex} name="necessityIntex" required value={2} /> 2: paying for a haircut etc &nbsp;&nbsp;</label>
                    <input class="form-check-input" type="radio" id="index3" onChange={handleNecessityIndex} name="necessityIntex" required value={3} /><label for="index3"> 3: is just plain naughty and you know it &nbsp;&nbsp;</label>
                </fieldset>
                <br/>
                <br/>
                <input class="form-control" type="date" onChange={handleDateChange} name="date" value={date} required />
                <br />
                <label for="category">Category</label>
                <select class="form-control" name="category" onChange={handleCategoryChange} required>
                    {Array.from(Array(categoryList.length)).map((number, idx) => {
                        return (
                            <option value={categoryList[idx].id} placeholder="Category">{categoryList[idx].categoryName}</option>
                        )
                    })
                    }
                </select>
                <br/>
                <select class="btn btn-outline-primary" name="directDebit" onChange={handleDirectDebitChange} required>
                    <option value="true">Direct Debit</option>
                    <br/>
                    <option value="false">One-Off</option>
                    <br/>
                </select>
                
                <p>Whose Account?</p>

                {Array.from(Array(personList.length)).map((number, idx) => {

                    return (
                        <>
                            <input type="radio" name="person" id="person" onChange={handlePersonChange} required value={personList[idx].id} /><label for="person">{personList[idx].name}</label>
                            <br/>
                            <br/>
                        </>
                    )
                })
                }

                <p for="purpose">Who was this actually for?</p>
                
                {Array.from(Array(purposeList.length)).map((number, idx) => {
                    return (
                        <>
                            <input type="radio" name="purpose" id="purpose" onChange={handlePurposeChange} required value={purposeList[idx].id} /><label for="purpose">{purposeList[idx].purposeName}</label>
                            <br/>
                            <br/>
                        </>
                    )
                })
                }
                

                
                {message}
                

                <br />
                <button class="btn btn-outline-primary" onClick={handleSubmit()} type="submit">Update</button>
            </form>
            <form onSubmit={handleDelete}>
                <div>
                    <button class="btn btn-outline-primary" onClick={handleDelete} type="submit-target" >Delete</button>
                    <br />
                    {deleteMessage}
                </div>
            </form>
        </>
    )
}

export default ExpenseEdit