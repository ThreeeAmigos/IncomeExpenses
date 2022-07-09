import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../css/input.css'
import '../css/list.css'

const RegisterPage = () => {


    const completeUserList = []
    const [userList, setUserList] = useState(completeUserList)
    const [name, setName] = useState('')
    const [inputCount, setInputCount] = useState(0)

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleAdd = () => {
        const newList = userList.concat({ name, id: uuidv4() })
        setUserList(newList)

        setName('');
    }

    const handleClick = () => {
        setInputCount(inputCount + 1);

    }

    return (
        <>
            <h1>TRACK YOUR EXPENSE</h1>
            <h3>We're gonna make you rich!</h3>
            <div>
                Who we are talking to ? <input type="text" onChange={handleChange} value={name} placeholder='Your name' required />  <button type="button" onClick={handleAdd}>Add</button>
            </div>
            <div>
                <div>Household</div>
                <ul>
                    {userList.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    <li>We want to buy a house</li>
                    <li>We want to buy a car</li>
                    <li>We want to send our children to uni</li>
                </ul>
            </div>
            <div>
                    So we need £ <input id="pound" type="text" placeholder="20,000" required /> by <input type="date" /> <div id="current-position"></div><button>next</button>
            </div>
            <ul>
                {userList.map((item) => (
                    <li key={item.id}> {item.name} </li>
                ))}
            </ul>
            <button onClick={handleClick}> add current balance </button>
            {Array.from(Array(inputCount)).map((placeholder, index) => {
                return <input key={index}  type="text"></input>
            })}
            
            <div id="current-position"></div>
            

        </>
    )

}

export default RegisterPage