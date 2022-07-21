import React, {useState} from "react"
import {useMutation} from "@tanstack/react-query";
import {signupUser, getCode} from "../../api/axiosReq.js";
import TextFieldComponent from "../../components/inputs/TextFieldComponent.jsx";
import { useForm, Controller } from "react-hook-form";
import Alert from '@mui/material/Alert';
import SendCode from "./sendCode.jsx"

const SignupPage = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [email, setEmail] = useState("");

    const {isLoading, error, isError, mutateAsync, data} = useMutation(signupUser)

    const onSubmit =async (data) => {
        await mutateAsync({name:data.name, email:data.email, phoneNumber:data.phoneNumber, code:data.code})
    }

    return(
        <>
            <div style={{backgroundColor:"white"}}>
                <TextFieldComponent
                    name="name"
                    control={control}
                    label="Name" />
                <TextFieldComponent
                    name="email"
                    control={control}
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    label="Email" />
                {
                    email && <SendCode email={email} />
                }
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


{/*<form action="" onSubmit={handleSubmit}>*/}
{/*    <input type="text" placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>*/}
{/*    <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>*/}
{/*    <input type="submit"/>*/}
{/*    {isLoading && <p>Loading</p>}*/}
{/*</form>*/}