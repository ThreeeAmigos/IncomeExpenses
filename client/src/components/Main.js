
import React, { useEffect, useState } from 'react';
import { getElements } from '../services/TrackerServices';
import Dashboard from './Dashboard';
import RegisterPurpose from './RegisterPurpose';


const Main = () => {


    const [person, setPerson] = useState([])

        useEffect(() => {
            getElements("persons")
                .then(item => setPerson(item))
        }, [])


    return (
        <>
            {person[0] ? <Dashboard /> : <RegisterPurpose />}
        </>
    )

}






export default Main;