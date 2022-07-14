import React, { useEffect, useState } from 'react';
import { getElements } from '../../services/TrackerServices'
import PersonEdit from './PersonEdit';
import SetupMenu from '../SetupMenu';

const Person = () => {

    const [person, setPerson] = useState([])
    const [position, setPosition] = useState(0)
    const [message, setMessage] = useState('')
    const [newPersonName, setNewPersonName] = useState('')
    const [loan, setLoan] = useState(0)
    const [household, setHousehold] = useState([])


    const fetchData = () => {
        getElements("persons")
            .then(item => setPerson(item))
        getElements("households")
            .then(item => setHousehold(item))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handlePost = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch("http://localhost:8080/persons/", {
                method: "POST",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify({
                    currentPosition: position * 100,
                    loan: loan * 100,
                    name: newPersonName,
                    household: household[0]
                }
                )
            })

            const res2 = await fetch("http://localhost:8080/purposes/", {
                method: "POST",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify({
                    purposeName: newPersonName
                }
                )
            })

            const resJson = await res.json()
            if (res.status === 202 && res2.status == 202) {
                setMessage("Person Changed")
            } else {
                setMessage("")
            }
        }

        catch (err) {
            console.log(err)
        }
        fetchData()

    }


    const handleNewPersonChange = (event) => {
        setNewPersonName(event.target.value)
    }
    const handleNewPositionChange = (event) => {
        setPosition(event.target.value)
    }
    const handleLoanChange = (event) => {
        setLoan(event.target.value)
    }


    return (

        <>
            <SetupMenu />

            <div className="center">

                <h1>Who's in?</h1>
                <table >
                    <thead>
                        <tr>
                            <th ></th>

                            <th className="column-wide" >Name</th>
                            <th className="column-wide">Current Positive Balance</th>
                            <th className="column-wide">Debts</th>

                        </tr>
                    </thead>
                </table>
                <table>
                    <tbody>
                        <tr className="table table-hover">

                            {Array.from(Array(person.length)).map((number, idx) => {

                                return (
                                    <details>
                                        <summary>
                                            <td className="column">{idx + 1}</td>
                                            <td className="column-wide">{person[idx].name}</td>
                                            <td className="column-wide">£{person[idx].currentPosition / 100}</td>
                                            <td className="column-wide">£{person[idx].loan / 100}</td>
                                        </summary>
                                        <p ><PersonEdit idx={person[idx]} /></p>

                                    </details>

                                )

                            })
                            }
                        </tr>
                    </tbody >

                </table >

                <br />
                <br />
                <br />
                <br />
                <p>Add Someone Else?</p>
                <form onSubmit={handlePost}>

                    <input className="form-control" type="text" onChange={handleNewPersonChange} value={newPersonName} required placeholder="Name" /> 

                    <br />
                    <label for="position">Current Positive Balance</label>
                    <br />
                    <input className="form-control" type="number" onChange={handleNewPositionChange} value={position} name="position" required /> 
                    <br />
                    <label for="loan">Debts</label>
                    <br />
                    <input className="form-control"  name="loan" type="number" onChange={handleLoanChange} value={loan} required /> <br />






                    <button className="btn btn-outline-primary"  onClick={handlePost} type="submit-target" >Add Someone Else</button>

                    <br />
                    {message}
                </form>


                <br />
            </div >
        </>
    )
}

export default Person


