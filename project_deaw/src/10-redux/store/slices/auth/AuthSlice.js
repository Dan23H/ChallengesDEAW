import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialstate: {
        status: 'checking',
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMensaje: null
    },
    reducers: {
        register: (state, action) => {
            state.email = action.payload.email
        },
        logout: (state, action) => {

        },
        checkingCredentials: (state, action) => {
            console.log('checking')
        }
    }
})

export const { login, logout, checkingCredentials, } = authSlice.actions