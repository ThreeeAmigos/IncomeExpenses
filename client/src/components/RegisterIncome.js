import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getElements } from '../services/TrackerServices';

const RegisterIncome = () => {


    const [personList, setPersonList] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        getElements("persons")
            .then(item => setPersonList(item))
    }, [])



    const calculateTotal = () => {

        let total = 0
        if (personList[0]) {
            for (let i = 0; i < personList.length; i++) {
                total += personList[i].currentPosition
            }
            return total
        }

    }



    return (<>
        <div>OK We have £ {personList[0] ? calculateTotal() : <div key={uuidv4()}> Loading </div>} </div>
        <br />
        <div>+ Cam's Graph +</div>

        {/* Graph by Cam */}

        <br />
        <div>£000 per month we need not to waste! </div>

        <input type="number"/>  is your payday right? 
        <br/>
        


        {Array.from(Array(personList.length)).map((number, index) => {
            return (
                <div key={uuidv4()}>
                    
                    
                    
                </div>
            )

        }
        )
        }


    </>)
}

export default RegisterIncome