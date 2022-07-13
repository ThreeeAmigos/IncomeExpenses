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

            <div class="center">

                <h1>User List</h1>
                <table >
                    <thead>
                        <tr>
                            <th ></th>
                            <th class="column-wide">Name</th>
                            <th class="column-wide">Current Position</th>
                            <th class="column-wide">Debt</th>
                        </tr>
                    </thead>
                </table>
                <table>
                    <tbody>
                        <tr class="table table-hover">

                            {Array.from(Array(person.length)).map((number, idx) => {

                                return (
                                    <details>
                                        <summary>
                                            <td class="column">{idx + 1}</td>
                                            <td class="column-wide">{person[idx].name}</td>
                                            <td class="column-wide">£{person[idx].currentPosition / 100}</td>
                                            <td class="column-wide">£{person[idx].loan / 100}</td>
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
                <p>Add a new Person</p>
                <form onSubmit={handlePost}>

                    <input class="form-control" type="text" onChange={handleNewPersonChange} value={newPersonName} required placeholder="name" /> 
                    <br />
                    <label for="position">Current Position</label>
                    <br />
                    <input class="form-control" type="number" onChange={handleNewPositionChange} value={position} name="position" required /> 
                    <br />
                    <label for="loan">Debt</label>
                    <br />
                    <input class="form-control"  name="loan" type="number" onChange={handleLoanChange} value={loan} required /> <br />





                    <button class="btn btn-outline-primary"  onClick={handlePost} type="submit-target" >Add Person</button>
                    <br />
                    {message}
                </form>


                <br />
            </div >
        </>
    )
}

export default Person


