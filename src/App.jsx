import { useState } from 'react'
import './App.css'
import React, { useEffect } from "react";
import {
    Route,
    Routes,
    BrowserRouter as Router,
} from "react-router-dom";
// import { actionTypes, useStateValue } from "./store";
import { useCookies } from "react-cookie";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import LoginPage from "./pages/login/loginPage.jsx";
import SignupPage from "./pages/signup/signupPage.jsx";
const queryClient = new QueryClient();
const App = () => {

    const [cookie] = useCookies(["jwt"]);
    // const [{ token }, dispatch] = useStateValue();
    //
    // useEffect(() => {
    //     const setToken = () => {
    //         const { jwt } = cookie;
    //         if (jwt) {
    //             dispatch({ type: actionTypes.SET_TOKEN, value: jwt });
    //         }
    //     };
    //     if (token === null) {
    //         setToken();
    //     }
    // }, [dispatch, token, cookie]);

    return (

            <QueryClientProvider client={queryClient}>
                <Router>
                    <Routes>
                        <Route path="/login" element={ <LoginPage/>}/>
                        <Route path="/signup" element={ <SignupPage/>}/>
                    </Routes>
                    {/*<Route path="/" exact={true}>*/}
                    {/*    {token ? <Home /> : <Redirect to="/login" />}*/}
                    {/*</Route>*/}

                    {/*<Route path="/signup">*/}
                    {/*    {!token ? <Signup /> : <Redirect to="/" />}*/}
                    {/*</Route>*/}
                </Router>
            </QueryClientProvider>

    );
};

export default App;
