import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { logout, register } from './store/slices/auth/AuthSlice.js'
import { useForm } from "../hooks/useForm";

import { registerAuth } from "./store/slices/auth/Thunks.js";

export const Registro = () => {
    const dispatch = useDispatch()
    const {email, password, onInputChange, formState} = useForm({
        email: 'jlopez0313@gmail.com',
        password: '12346'
    })

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        dispatch(registerAuth(email,password))
    }

    useEffect(() => {
        onAuthStateChanged(auth, async(user) => {
            if (!user) return dispatch(logout())
            dispatch(register({email:user.email}))
        })
    },[])

    return ( 
        <>
            <h1>Registro</h1>
            <hr />
            <form onSubmit={(event) => onSubmit(event)}>
                <input name="email" type="email" onChange={(event) => onInputChange(event)} value={email} />
                <input name="password" type="password" onChange={(event) => onInputChange(event)} value={password} />
                <button type="submit">Registro</button>
            </form>
        </>
    )
}


  