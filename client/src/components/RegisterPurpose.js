import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RegisterTarget from './RegisterTarget';
import RegisterCurrentBalance from './RegisterCurrentBalance';
import { getElements } from '../services/TrackerServices';
import '../css/input.css';
import '../css/list.css';
import '../css/texteffect.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


const RegisterPurpose = () => {


    const [userList, setUserList] = useState([])
    const [purposeList, setPurposeList] = useState([])


    const fetchData = () => {
        getElements("purposes")
            .then(item => setPurposeList(item))
    }


    useEffect(() => {
        fetchData()
    }, [])







    // POST Persons
    const [purposeName, setPurposeName] = useState("")

    // Error Messages
    const [message, setMessage] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch("http://localhost:8080/purposes", {
                method: "POST",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify({
                    purposeName: purposeName
                })
            })

            const resJson = await res.json()
            if (res.status === 201) {
                setPurposeName("");
            } else {
                setMessage("Error")
            }

        }
        catch (err) {
            console.log(err)
        }
        fetchData();

    }


    const handleChange = (event) => {
        setPurposeName(event.target.value)
    }


    const handleAdd = () => {
        const newList = userList.concat({ purposeName: purposeName })
        setUserList(newList)

    }





    return (
        <div className="align">
            <h1>TRACK YOUR EXPENSE</h1>
            <br />
            <h3>We're gonna make you rich!</h3>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                    Who we are talking to ?
                    <br />
                    <br />
                    <input className="form-control" type="text" onChange={handleChange} value={purposeName} placeholder='Your name' required />  <br />
                    <button className="btn btn-outline-primary" type="submit" onClick={handleAdd}>Add</button>
                </div>
            </form>
            <div>
                <hr />

                {purposeList[0] ? purposeList.map((item) =>
                    <div key={uuidv4()}>{item.purposeName}</div>) : <div key={uuidv4()}> Loading </div>}

            </div>

            <div>
                <hr />
                <p className="rotatingText">
                    <br />
                    We want to
                    <br/>
                    <br/>
                    <div className="rotatingText-adjective">buy a house</div>
                    <div className="rotatingText-adjective">have alpacas</div>
                    <div className="rotatingText-adjective">go to Holiday</div>
                    <div className="rotatingText-adjective">marry</div>
                    <div className="rotatingText-adjective">buy a house</div>
                    <div className="rotatingText-adjective">do kitchen</div>
                    <div className="rotatingText-adjective">have many cats</div>
                    <div className="rotatingText-adjective">have many cats</div>
                    <div className="rotatingText-adjective">have many cats</div>
                    </p>
            </div>
            <br/>
            <hr />

            <RegisterTarget />

            <ul>
                {userList.map((item) => (
                    <li key={uuidv4()}> {item.name} </li>
                ))}
            </ul>

            {Array.from(Array(userList.length)).map((number, index) => {
                return (
                    <div key={uuidv4()}>
                        <br />
                        <hr />
                        {userList[0] == userList[index] ? <div key={uuidv4()} >{userList[index].purposeName}, Empty your Pocket</div> : <div key={uuidv4()} >You too, {userList[index].purposeName}, cough up!</div>}
                        <br />
                        <RegisterCurrentBalance userList={userList[index]} />
                    </div>
                )

            }
            )
            }
            <Link to="/registerIncome">Register Income</Link>
        </div>
    )

}

export default RegisterPurpose