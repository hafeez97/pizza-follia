import React, { useState } from "react";
import {useForm} from "react-hook-form";

export function useLoginService() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const loginService = (data) => {
        console.log(data)
        let response = await

    }
}