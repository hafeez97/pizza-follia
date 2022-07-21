import React, {useState} from "react"
import {useMutation} from "@tanstack/react-query";
import {loginUser} from "../../api/axiosReq.js";
import TextFieldComponent from "../../components/inputs/TextFieldComponent.jsx";
import { useForm} from "react-hook-form";
import Alert from "@mui/material/Alert";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { actionTypes, useStateValue } from "../../store";

const LoginPage = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [{ token }, dispatch] = useStateValue();
    const [, setCookie] = useCookies(["jwt"]);
    const Navigate = useNavigate();

    const {isLoading, error, isError, mutateAsync, data} = useMutation(loginUser, {
        onSuccess:(data)=>{
            dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
            setCookie("jwt", data.token);
            Navigate("/");
        }
    })


    const onSubmit =async (data) => {
        console.log(data)
        await mutateAsync({email:data.email, password: data.password})
    }

    return(
        <>
            <div style={{backgroundColor:"white"}}>
                <TextFieldComponent
                name="email"
                control={control}
                helperText="Helpers"
                label="Email" />

                <TextFieldComponent
                    name="password"
                    control={control}
                    helperText="Helpers"
                    type="password"
                    label="Password" />
                {
                    isLoading ? <p style={{color:"black"}}>Loading</p> : <button onClick={handleSubmit(onSubmit)}>Submit</button>
                }
                {isError &&
                    <Alert icon={false} severity="success">
                        {error.message}
                    </Alert>
                }
            </div>
        </>
    )
}
export default LoginPage