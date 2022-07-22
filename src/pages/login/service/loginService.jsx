import React from "react"
import React, {useState} from "react"
import {useMutation} from "@tanstack/react-query";
import {loginUser} from "../../api/axiosReq.js";
import TextFieldComponent from "../../components/inputs/TextFieldComponent.jsx";
import { useForm} from "react-hook-form";
import Alert from "@mui/material/Alert";
import { useCookies } from "react-cookie";
import { actionTypes, useStateValue } from "../../store";
import {useNavigate} from 'react-router-dom';

export function LoginService() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [, dispatch] = useStateValue();
    const [, setCookie] = useCookies(["jwt"]);
    const navigate = useNavigate()

    const {isLoading, error, isError, mutateAsync} = useMutation(loginUser, {
        onSuccess:(data)=>{
            console.log(data.data.token)
            dispatch({ type: actionTypes.SET_TOKEN, value: data.data.token });
            setCookie("jwt", data.data.token);
            navigate("/");
        }
    })

}