import React, {useState} from "react"
import {useMutation} from "@tanstack/react-query";
import {loginUser} from "../../api/axiosReq.js";
import TextFieldComponent from "../../components/inputs/TextFieldComponent.jsx";
import { useForm, Controller } from "react-hook-form";
import Alert from "@mui/material/Alert";

const LoginPage = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [userData, setUserData] = useState("");
    const {isLoading, error, isError, mutateAsync, data} = useMutation(loginUser)
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