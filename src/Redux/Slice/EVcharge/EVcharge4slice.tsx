import { createSlice } from "@reduxjs/toolkit";


const EVcharge4slice = createSlice({
    name: 'EVcharge4',
    initialState: {
        evpage4data: [
            {
                id: 1,
                title: "Pickup Location",
                type: "input",
                placeholder: "Enter pickup location"
            }
        ]
    },
    reducers:{}


})

export default EVcharge4slice.reducer