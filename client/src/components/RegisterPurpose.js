import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RegisterTarget from './RegisterTarget';
import RegisterCurrentBalance from './RegisterCurrentBalance';
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



    return (
        <>
            <h1>TRACK YOUR EXPENSE</h1>
            <h3>We're gonna make you rich!</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    Who we are talking to ? <br />
                    <input type="text" onChange={handleChange} value={purposeName} placeholder='Your name' required />  <br />
                    <button type="submit" onClick={handleAdd}>Add</button>
                </div>
            </form>
                <div>
                <hr />
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
                <hr />
                <ul>
                    <li>We want to buy a house</li>
                    <li>We want to buy a car</li>
                    <li>We want to send our children to uni</li>
                </ul>
            </div>
            <hr />

            <RegisterTarget/>

            <ul>
                {userList.map((item) => (
                    <li key={uuidv4()}> {item.name} </li>
                ))}
            </ul>

            {Array.from(Array(userList.length)).map((number, index) => {
                return (
                    <>
                        <br />
                        <hr />
                        {userList[0] == userList[index] ? <div>{userList[index].purposeName},Empty your Pocket</div> : <div>You too,{userList[index].purposeName}, cough up!</div>}
                        <br />
                        <RegisterCurrentBalance userList={userList[index]}/>
                    </>
                )

            }
            )
            }
           
        </>
    )

}

export default RegisterPage