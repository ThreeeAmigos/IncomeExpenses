
import React, { useEffect, useState } from 'react';
import { getElements } from '../services/TrackerServices';
import Dashboard from './Dashboard';
import RegisterPurpose from './RegisterPurpose';


const Main = () => {


        const [purpose, setPurpose] = useState([])

        useEffect(() => {
            getElements("purposes")
                .then(item => setPurpose(item))
        }, [])


    return (
        <>
            {purpose[0] ? <Dashboard /> : <RegisterPurpose />}
        </>
    )

}






export default Main;