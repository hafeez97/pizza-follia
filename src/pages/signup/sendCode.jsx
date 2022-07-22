import {useMutation} from '@tanstack/react-query';
import {getCode} from '../../api/axiosReq.js';
import TextFieldComponent from '../../components/inputs/TextFieldComponent.jsx';
import React from 'react';
import {useForm} from 'react-hook-form';

const SendCode = (props) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {isLoading, error, isError, mutateAsync} = useMutation(getCode, {
        onSuccess:(data) => {
            alert("Code Sent, Check Email")
    }
    })

    const onSubmit = async (email) => {
        console.log(email)
        await mutateAsync({email:email.email})
        return props.setEmail(email)
    }

    return(
        <>
            <div>
                <TextFieldComponent
                    name='email'
                    control={control}
                    type='email'
                    label='Email'
                />
                {isError ? <p style={{color:"black"}}>{error.message}</p> : isLoading ? <p style={{color:"black"}}>Loading</p> : <button onClick={handleSubmit(onSubmit)}>GET CODE</button>}

            </div>
        </>
    )
}
export default SendCode