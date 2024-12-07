import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAuthToken, TLoginData } from "../api";

export const fetchAuth = createAsyncThunk("users/fetchAuth", async (loginData: TLoginData) =>
    getAuthToken(loginData));

type TAuthState = {
    response: string,
    isLoading: boolean,
    error: string | undefined,
}

const initialState: TAuthState = {
    response: '',
    isLoading: false,
    error: undefined,
}

const authSlice = createSlice({
    name: 'authentification',
    initialState,
    reducers: {},
    selectors: {},
    extraReducers(builder) {
        builder
        .addCase(fetchAuth.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchAuth.rejected, (state, action) => {
            state.isLoading = false,
            state.error = action.error.message
        })
        .addCase(fetchAuth.fulfilled, (state, action) => {
            state.isLoading = false,
            state.response = action.payload
        })
    }
})

export const authReducer = authSlice.reducer;