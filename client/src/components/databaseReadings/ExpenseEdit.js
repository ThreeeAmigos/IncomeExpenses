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
                <input class="form-control" type="text" onChange={handleNameChange} name="expenseName" placeholder="What is for" required />
                <input class="form-control" type="text" onChange={handlePlaceChange} name="expensePlace" placeholder="from where" required />
                <input class="form-control" type="number" onChange={handleAmountChange} name="amount" placeholder="how much" required />
                <p>How important is this purchase:</p>
                <input type="radio" id="index1" onChange={handleNecessityIndex} name="necessityIntex" required value={1} /><label for="index1">1</label>
                <br/>
                <input type="radio" id="index2" onChange={handleNecessityIndex} name="necessityIntex" required value={2} /><label for="index2">2</label>
                <br/>
                <input type="radio" id="index3" onChange={handleNecessityIndex} name="necessityIntex" required value={3} /><label for="index3">3</label>
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
                <select class="btn btn-outline-primary" name="directDebit" onChange={handleDirectDebitChange} required>
                    <option value="true">Direct Debit</option>
                    <br/>
                    <option value="false">One-Off</option>
                </select>
                <br />
                <br/>
                <p>Who Pay</p>

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

                <p for="purpose">Who For</p>
                
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
                <button class="btn btn-outline-primary" onClick={handleSubmit()} type="submit">Add expense</button>
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