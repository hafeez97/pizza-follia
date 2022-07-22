import React, {useEffect, useState} from "react"
import {useMutation} from "@tanstack/react-query";
import {signupUser, getCode} from "../../api/axiosReq.js";
import TextFieldComponent from "../../components/inputs/TextFieldComponent.jsx";
import { useForm, Controller } from "react-hook-form";
import Alert from '@mui/material/Alert';
import SendCode from './sendCode.jsx';
import {useNavigate} from "react-router-dom";

const SignupPage = () => {
    const Navigate = useNavigate();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [email, setEmail] = useState("");

    const {isLoading, error, isError, mutateAsync, data} = useMutation(signupUser, {
        onSuccess:(data)=>{
            alert("Registered Successfully!")
            Navigate("/login")
        }
    })

    const onSubmit = async (data) => {
        data.image = ""
        data.email = email.email
        console.log(data)
        await mutateAsync({name:data.name, email:data.email, phoneNumber:data.phoneNumber, code:data.code, image:data.image})
    }

    return(
        <>
            <div style={{backgroundColor:"white"}}>
                <TextFieldComponent
                    name="name"
                    control={control}
                    label="Name" />

                    <SendCode setEmail={setEmail} />

                <TextFieldComponent
                    name="password"
                    control={control}
                    type="password"
                    label="Password" />
                <TextFieldComponent
                    name="phoneNumber"
                    control={control}
                    label="Phone Number" />
                <TextFieldComponent
                    name="code"
                    control={control}
                    type="number"
                    label="Code" />
                {
                    isLoading ?
                        <p style={{color:"black"}}>Loading</p>
                        :
                        <button onClick={handleSubmit(onSubmit)}>Submit</button>
                }
                {isError && <Alert icon={false} severity="success">
                    {error.message}
                </Alert> }
            </div>
        </>
    )
}
export default SignupPage
