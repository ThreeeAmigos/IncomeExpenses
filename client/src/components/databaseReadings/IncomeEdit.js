import React, { useEffect, useState } from 'react';
import { getElements } from '../../services/TrackerServices'

const IncomeEdit = (idx) => {





    const [income, setIncome] = useState([])
    const [incomeName, setIncomeName] = useState('')
    const [amount, setAmount] = useState(0)
    const [message, setMessage] = useState('')
    const [deleteMessage, setDeleteMessage] = useState('')
    const [personList, setPersonList] = useState('')
    const [date, setDate] = useState()
    const [salaryChange, setIsSalary] = useState(false)
    const [person, setPerson] = useState()

    useEffect(() => {
        getElements("persons")
            .then(item => setPersonList(item))
    }, [])



    const handleAmountChange = (event) => {
        setAmount(event.target.value)
    }

    const handleNameChange = (event) => {
        setIncomeName(event.target.value)
    }
    const handleDateChange = (event) => {
        setDate(event.target.value)
    }
    const handlePersonChange = (event) => {
        setPerson(parseInt(event.target.value))
    }
    const handleSalaryChange = (event) => {
        setIsSalary(Boolean(event))
    }



    const fetchData = () => {
        getElements("incomes")
            .then(item => setIncome(item))
    }


    useEffect(() => {
        fetchData()
    }, [])



    const dUrl = "http://localhost:8080/incomes/?id="

    const handleDelete = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch(dUrl + idx.idx.id, {
                method: "DELETE"
            })

            const resJson = await res.json()
            if (res.status === 202) {
                setDeleteMessage("Income DELETED")
            } else {
                setDeleteMessage("Error")
            }
            fetchData()
        }
        catch (err) {
            console.log(err)
        }

    }


    const url = "http://localhost:8080/incomes/"
    const handleSubmit = async (event) => {
        event.preventDefault()
        fetchData()
        try {
            const res = await fetch(url + idx.idx.id, {
                method: "PUT",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify({
                    incomeName: incomeName,
                    amount: amount*100,
                    date: date,
                    isSalary: salaryChange,
                    person: {
                        id: person
                    }
                }
                )
            })

            const resJson = await res.json()
            if (res.status === 202) {
                setMessage("Income Changed")
            } else {
                setMessage("Error")
            }
        }
        catch (err) {
            console.log(err)
        }
        fetchData()

    }
    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <br />
                <input type="text" onChange={handleNameChange} name="incomeName" placeholder="What is for" required />
                
                <input type="number" onChange={handleAmountChange} name="amount" placeholder="how much" required />

                <input type="date" onChange={handleDateChange} name="date" required />
                <br />

                <select name="salaryChange" onChange={handleSalaryChange} required>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>

                <br />
                <p>Who's income</p>
                {Array.from(Array(personList.length)).map((number, index) => {

                    return (
                        <>
                            <input type="radio" name="person" id="person" onChange={handlePersonChange} required value={personList[index].id} /><label for="person">{personList[index].name}</label>
                        </>
                    )
                })
                }
                <br />
                {message}

                <br />
                <button onClick={handleSubmit()} type="submit">Add income</button>
            </form>
            <form onSubmit={handleDelete}>
                <div>
                    <button onClick={handleDelete} type="submit-target" >Delete</button>
                    <br />
                    {deleteMessage}
                </div>
            </form>
        </div>
    )
}

export default IncomeEdit