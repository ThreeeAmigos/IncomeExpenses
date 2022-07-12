import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getElements } from '../services/TrackerServices';
import RegisterIncomeEach from './RegisterIncomeEach';

const RegisterIncome = () => {


    const [personList, setPersonList] = useState([])
    const [total, setTotal] = useState(0)
    const [formCount, setFormcount] = useState(1)
    const [formCount2, setFormcount2] = useState(1)
    const [formCount3, setFormcount3] = useState(1)
    



    const handleFormClick = () => { 
        setFormcount(formCount + 1);   }

    const handleFormClick2 = () => {
        setFormcount2(formCount2 + 1);
    }

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

    const handleChange = (event) => {
        let debtArray = document.getElementsByName("debt")
        for (let i = 0; i < debtArray.length; i++) {
            if (parseInt(debtArray[i].value) > 0) {
                total += parseInt(debtArray[i].value)
            }
        }
        setTotal(total)
    }


    return (<>
        <div>OK We have £ {personList[0] ? calculateTotal() : <div key={uuidv4()}> Loading </div>} </div>
        <br />
        <div>+ Cam's Graph +</div>

        {/* Graph by Cam */}

        <br />
        <div>£000 per month we need not to waste! </div>


        <br/>

        {Array.from(Array(personList.length)).map((number, index) => {
            return (
                <div key={uuidv4()}>
                    <br />
                    <hr />
                    {personList[0] == personList[index] ? <div key={uuidv4()} >{personList[index].name}, What are you biring home each month? 
                    <br/>

                        <button onClick={handleFormClick}> add regular incomes </button>
                        {Array.from(Array(formCount)).map((number, idx) => {

                        return(
                            <RegisterIncomeEach person={personList[index]} /> )})
                        }
                        
                    
                    </div> 
                    : <div key={uuidv4()} >{personList[index].name} you ?
                    
                    <br/>
                            <button onClick={handleFormClick2}> add regular incomes </button>
                            {Array.from(Array(formCount2)).map((number, idx) => {

                                return (
                                    <RegisterIncomeEach person={personList[index]} />)
                            })
                            }
                            
                    </div>}
                    <br />
                </div>
            )

        }
        )
        }


    </>)
}

export default RegisterIncome