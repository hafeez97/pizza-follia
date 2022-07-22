import { useState } from 'react'
import './App.css'
import React, { useEffect } from "react";
import {
    Route,
    Routes,
    Navigate,
    BrowserRouter as Router,
} from "react-router-dom";
import { actionTypes, useStateValue } from "./store";
import { useCookies, CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import LoginPage from "./pages/login/loginPage.jsx";
import SignupPage from "./pages/signup/signupPage.jsx";
import HomePageTest from "./pages/HomePageTest.jsx";
const queryClient = new QueryClient();


const App = () => {

    const [cookies] = useCookies(["jwt"]);
    const [{ token }, dispatch] = useStateValue();

    useEffect(() => {
        const setToken = () => {
            const { jwt } = cookies;
            if (jwt) {
                dispatch({ type: actionTypes.SET_TOKEN, value: jwt });
            }
        };
        if (token === null) {
            setToken();
        }
    }, [dispatch, token, cookies]);

    return (
            <QueryClientProvider client={queryClient}>
                    <Router>
                        <Routes>
                            {/*<Route path="/" element={token ? <HomePageTest/> : <Navigate to="/login"/>}/>*/}
                            <Route path="/" element={<HomePageTest/>}/>
                            <Route path="/login" element={ !token && <LoginPage/>}/>
                            <Route path="/login" element={ !token && <SignupPage/>}/>
                        </Routes>
                    </Router>
            </QueryClientProvider>

    );
};

export default App;
