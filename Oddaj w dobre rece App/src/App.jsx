import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AuthContextProvider} from "./context/AuthContext.jsx";
import {Home} from "./Components/Home.jsx";
import {Login} from "./Components/Login.jsx";
import {Register} from "./Components/Register.jsx";
import {LoggedOut} from "./Components/LoggedOut.jsx";
import {DonateForm} from "./Components/DonateForm.jsx";
import {ProtectedRoute} from "./Components/ProtectedRoute.jsx";
import {LoggedIn} from "./Components/LoggedIn.jsx";
import {LoggedMain} from "./Components/LoggedMain.jsx";


export const App = () => {
    return (
        <AuthContextProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/logowanie' element={<Login/>} />
                    <Route path='/rejestracja' element={<Register/>} />
                    <Route path='/wylogowanie' element={<LoggedOut/>} />
                    <Route
                        path='/zalogowano'
                        element={
                            <ProtectedRoute>
                                <LoggedIn/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/oddaj-rzeczy'
                        element={
                            <ProtectedRoute>
                                <LoggedMain />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthContextProvider>

    )
}
