
import React from 'react';
import RegisterPurpose from './RegisterPurpose';
import RegisterIncome from './RegisterIncome';
import RegisterExpense from './RegisterExpense';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";



const Register = () => {




    return (
        <div>
            <Router>
                <Link to="/registerPurpose">Register Purpose</Link>
                <Link to="/registerIncome">Register Income</Link>
                <Link to="/registerExpense">Register Expense</Link>
                <Routes>
                    <Route path="/registerPurpose" element={<RegisterPurpose />} />
                    <Route path="/registerIncome" element={<RegisterIncome />} />
                    <Route path="/registerExpense" element={<RegisterExpense />} />
                </Routes>
            </Router>

        </div>
    )

}






export default Register;