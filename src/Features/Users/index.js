import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        currUser: JSON.parse(localStorage.getItem('user')) || null,
        isAuth: false,
        error: null
    },
    reducers: {
        StartingLogin: (state) => {
            state.isAuth = true
        },
        SuccessLogin: (state, action) => {
            state.isAuth = true
            state.currUser = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
            state.error = false
        },
        FailureLogin: (state, action) => {
            state.isAuth = false
            state.error = true
        },
        LogOut: (state) => {
            state.isAuth = false
            state.currUser = null
            localStorage.setItem('user', JSON.stringify(null))
            state.error = false
        }

    }
})

export const { StartingLogin, SuccessLogin, FailureLogin, LogOut } = UserSlice.actions
export default UserSlice.reducer