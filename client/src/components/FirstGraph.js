import { useEffect, useState } from 'react'
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Scatter, ScatterChart, ComposedChart, Area, Bar, Line } from 'recharts'
import { getElements } from '../services/TrackerServices'



const FirstGraph = () => {

    const [households, setHouseholds] = useState([])
    const [persons, setPersons] = useState([])

    useEffect(() => {
        getElements("households")
            .then(item => setHouseholds(item))

    }, [])
    useEffect(() => {
        getElements("persons")
            .then(item => setPersons(item))
    }, [])

    const allTxsSorted = () => {
        if (persons.length > 0) {
            return persons[0].currentPosition + persons[1].currentPosition
        }
    }

    const today = new Date().toISOString().slice(0, 10)
    const today2 = new Date()

    return (
        <>
            {households[0] && persons[0] ?
                <>
                    <ResponsiveContainer width="99%" aspect={2} >
                        <ComposedChart margin={{
                            top: 50,
                            right: 50,
                            left: 50,
                            bottom: 50
                        }}
                            data={[{ amount: persons[0].currentPosition + persons[1].currentPosition, date: today }, { amount: households[0].target, date: households[0].date }]} >
                            <XAxis dataKey="date" />
                            <YAxis tick={false} axisLine={false} />
                            <Tooltip />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Area type="monotone" dataKey="amount" fill="#8884d8" stroke="#8884d8" />
                            {/* <Bar dataKey="amount" barSize={20} fill="#413ea0" /> */}

                            {/* <Scatter dataKey="amount" fill="#8884d8" />
                    <Scatter dataKey="amount2" fill="#82ca9d" /> */}
                        </ComposedChart>
                    </ResponsiveContainer>
                </>
                : <>Loading</>}

        </>
    )
}

export default FirstGraph