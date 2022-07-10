import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../css/input.css'
import '../css/list.css'

const RegisterTarget = () => {


    const completeTargetList = []
    // PUT Household Target and byDate
    const [target, setTarget] = useState(0)
    const [date, setDate] = useState()

    // Error Messages
    const [message, setMessage] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch("http://localhost:8080/households/1", {
                method: "PUT",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify({
                    target: target,
                    date: date
                }
                
                )
                
            })
            console.log(res.body)

            const resJson = await res.json()
            if (res.status === 202) {
                setMessage("Target Saved")
            } else {
                setMessage("Error")
            }
        }
        catch (err) {
            console.log(err)
        }

    }

    const handleTargetChange = (event) => {
        setTarget(event.target.value)
    }

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    So we need £ <br /><input id="pound" type="number" placeholder="20,000" onChange={handleTargetChange} value={target} required /> 
                    <br /> by <br /><input key={uuidv4()} type="date" onChange={handleDateChange} value={date} required /> <br />
                    <button onClick={handleSubmit} type="submit-target">Set Target</button>
                    <br />
                    {message}
                </div>
            </form>
        </>
    )

}

export default RegisterTarget