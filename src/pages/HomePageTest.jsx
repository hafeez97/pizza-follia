import React from 'react'
import { actionTypes, useStateValue } from "../store";
import {Navigate} from "react-router-dom";
import { useCookies } from "react-cookie";
import {useNavigate} from 'react-router-dom';

const HomePageTest = () => {
    const [{ token }, dispatch] = useStateValue();
    const [, , removeCookie] = useCookies(["jwt"]);
    React.useEffect(() => {
        console.log(token)
    }, [token]);
    const navigate = useNavigate()



    const LogOut = () => {
        dispatch({type: actionTypes.SET_TOKEN, value: null})
        removeCookie("jwt")
    }
    const ToLogin = () => {
        navigate("/login")
    }

    return(
        <>
            {token ?    <p>Logged In</p> : <p>Logged Out</p>}
            <button onClick={token ? LogOut : ToLogin}>{token ? "Log Out" : "Log In"}</button>

        </>
    )
}
export default HomePageTest