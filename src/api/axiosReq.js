import React from 'react';
import axios from "axios"

const api =  axios.create({
    baseURL : "https://pizzafolio.herokuapp.com/"
})

export const loginUser = async ({email, password}) => {
    try {
        const {data} = await api.post("api/loginUser", {email, password})
        return data
    } catch(error){
        throw Error(error.response.data.message)
    }
}

export const signupUser = async ({email, password, name, code, phoneNumber, image}) => {
    try {
        const {data} = await api.post("api/registerUser", {name, email, password, phoneNumber, code, image})
        return data
    } catch(error){
        throw Error(error.response.data.message)
    }
}

export const getCode = async ({email}) => {
    try {
        const {codeData} = await api.post("api/sendCode", {email})
        return codeData
    } catch(error){
        throw Error(error.response.data.message)
    }
}