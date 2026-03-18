import { createSlice } from "@reduxjs/toolkit";

const PageSwitichslice=createSlice({
    name:'pageswitch',
    initialState:{
        page:0
    },
    reducers:{
        setpage:(state,action)=>{
            state.page=action.payload
        }
    }
})
export const {setpage}= PageSwitichslice.actions;
export default PageSwitichslice.reducer;