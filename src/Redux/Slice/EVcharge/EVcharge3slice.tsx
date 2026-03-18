import { createSlice } from "@reduxjs/toolkit";


const EVcharge3slice = createSlice({
    name: 'EVcharge3',
    initialState: {
        evpage3data: [
            {
                id: 1,
                title: "Where is your Vehicle?",
                type: "button",
                options: [
                    { label: "Current Location", value: "current_location" },
                    { label: "Type Address", value: "type_address" }
                ]
            }
        ]

    },
    reducers: {},

})

export default EVcharge3slice.reducer;