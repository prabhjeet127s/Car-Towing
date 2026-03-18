import { createSlice } from "@reduxjs/toolkit";

const EVchaarge2slice = createSlice({

    name: "EVcharge2",
    initialState: {
        evpage2data: [
            {
                id: 1,
                title: "You are booking service for?",
                type: "button",
                options: [
                    { label: "For Me", value: "me" },
                    { label: "For Someone Else", value: "someone_else" }
                ]
            }
        ],
    },
    reducers: {}
})


export default EVchaarge2slice.reducer