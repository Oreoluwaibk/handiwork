import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import { loginAction } from "@/redux/action/auth";


// let isLocalUser = null;
// let isLocalToken = null;

// if (typeof window !== "undefined") {
//     isLocalUser = localStorage.getItem("commutor_user");
//     isLocalToken = localStorage.getItem("commutor_token");
// }
export interface signinReducer {
    user: any,
    isAuthenticated: boolean,
    token: any | null,
    loading: boolean,
    success: boolean,
    error: any,
    authentication?: {}
}


const initialState: signinReducer = {
    user: null,
    isAuthenticated:false,
    token: null,
    loading: false,
    success: false,
    error: null,
}

export const signinSlice = createSlice({
    name: "signin",
    initialState,
    reducers: {
        signOut: (state) => {
            state.user = null,
            state.isAuthenticated = false,
            state.token = null,
            state.loading = false,
            state.success = false,
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state) => {
            state.loading = true;
            return state;
        }),
        builder.addCase(loginAction.fulfilled, (state, { payload }) => {
            console.log("dd", payload);
            
            state.loading = false;
            state.isAuthenticated = true;
            state.success = true;
            state.error = null;
            state.token = payload;
            state.user = payload;
            return state;
        }),
        builder.addCase(loginAction.rejected, (state,{error}) => {
            state.user = null;
            state.loading = false;
            state.isAuthenticated = false;
            state.success = false;
            state.error = error;
            return state;
        })
    }
});

export const { signOut } = signinSlice.actions
export default signinSlice.reducer;
export const authState = ( state: RootState ) => state.auth;
export const selectedToken = ( state: RootState ) => state.auth.token;