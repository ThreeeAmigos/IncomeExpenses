import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RegisterTarget from './RegisterTarget';
import '../css/input.css'
import '../css/list.css'

const RegisterPage = () => {

    

    const completeUserList = []
    const [userList, setUserList] = useState(completeUserList)
    const [inputCount, setInputCount] = useState(0)

    // POST Persons
    const [purposeName, setPurposeName] = useState("")

    // Error Messages
    const [message, setMessage] = useState("")
    
    const handleSubmit = async(event) => {
        event.preventDefault()
        try {
            const res = await fetch("http://localhost:8080/purposes", {
                method: "POST",
                headers: new Headers({"Content-Type": "application/json"}),
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
        catch (err){
            console.log(err)
        }

    }

    const handleChange = (event) => {
        setPurposeName(event.target.value)
    }

    const handleAdd = () => {
        const newList = userList.concat({purposeName:purposeName})
        setUserList(newList)
    }

    const handleClick = () => {
        setInputCount(inputCount + 1);

    }

    return (
        <>
            <h1>TRACK YOUR EXPENSE</h1>
            <h3>We're gonna make you rich!</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    Who we are talking to ? <input type="text" onChange={handleChange} value={purposeName} placeholder='Your name' required />  <button type="submit" onClick={handleAdd}>Add</button>
                </div>
            </form>
                <div>
                    <div>Household</div>

                    {/* Need to Change to fetch Purpose or Person List */}
                    <ul>
                        {userList.map((item) => (
                            <li key={uuidv4()}> {item.purposeName} </li>
                        ))}
                    </ul>
                    {message}
                </div>
            
            <div>
                <ul>
                    <li>We want to buy a house</li>
                    <li>We want to buy a car</li>
                    <li>We want to send our children to uni</li>
                </ul>
            </div>

            <RegisterTarget/>

            <ul>
                {userList.map((item) => (
                    <li key={uuidv4()}> {item.name} </li>
                ))}
            </ul>
            <button onClick={handleClick}> add current balance </button>
            {Array.from(Array(inputCount)).map((placeholder, index) => {
                return <input key={uuidv4()} type="text"></input>
            })}

            <div id="current-position"></div>


        </>
    )

}

export default RegisterPage