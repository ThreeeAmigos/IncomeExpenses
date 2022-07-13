import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getElements } from '../services/TrackerServices';
import RegisterExpenseEach from './RegisterExpenseEach';
import { Container } from 'react-bootstrap'

const RegisterExpense = () => {


    const [personList, setPersonList] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [formCount, setFormcount] = useState(1)
    const [formCount2, setFormcount2] = useState(1)




    const handleFormClick = () => {
        setFormcount(formCount + 1);
    }

    const handleFormClick2 = () => {
        setFormcount2(formCount2 + 1);
    }

    useEffect(() => {
        getElements("persons")
            .then(item => setPersonList(item))
        getElements("categories")
            .then(item => setCategoryList(item))
    }, [])





    return (<>
        
        <details>
            <summary>Category</summary>
            
            <div>
                {Array.from(Array(categoryList.length)).map((number, idx) => {

                    return (
                        <p >{categoryList[idx].categoryName}</p>
                        )
                })
                }
            </div>
        </details>

        <br />

        {Array.from(Array(personList.length)).map((number, index) => {
            return (
                <div >
                    <br />
                    <hr />
                    {personList[0] == personList[index] ? <div >{personList[index].name}, What do you have going out?
                        <br />

                        <button onClick={handleFormClick}> add your direct debit </button>
                        {Array.from(Array(formCount)).map((number, idx) => {

                            return (
                                <RegisterExpenseEach person={personList[index]} id={uuidv4()} />)
                        })
                        }


                    </div>
                        : <div key={uuidv4()} >{personList[index].name} you ?

                            <br />
                            <button onClick={handleFormClick2}> add your direct debit </button>
                            {Array.from(Array(formCount2)).map((number, idx) => {

                                return (
                                    <RegisterExpenseEach person={personList[index]} id={uuidv4()} />)
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

export default RegisterExpense