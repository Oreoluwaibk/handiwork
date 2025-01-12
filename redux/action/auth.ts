import { createAsyncThunk } from "@reduxjs/toolkit";


export const loginAction = createAsyncThunk(
    "login",
    async(data: any) => { 
        const { token, userData } = data;
        console.log("jjhjhdjhdjhdjh");
        
        // localStorage.setItem("commutor_user", JSON.stringify(userData));
        // localStorage.setItem("commutor_token", JSON.stringify(token));
        return data;
    }
)