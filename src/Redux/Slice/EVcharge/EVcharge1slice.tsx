import { createSlice } from "@reduxjs/toolkit";

const EVcharge1slice = createSlice({
    name: "EVcharge1",

    initialState: {
         evpage1data :
            [
                {
                    id: 1,
                    field: 'vehicletype',
                    title: "Vehicle Type",
                    type: "select",
                    options: [
                        "SUV",
                        "JEEP",
                        "SEDAN",
                        "SPORTS CAR",
                        "AMBULANCE",
                        "TAXI",
                        "TRUCK",
                    ],
                },
                {
                    id: 2,
                    field: 'chargingsupported',
                    title: "Does the vehicle have a charging cable?",
                    type: "button",
                    options: ["Yes", "No"],
                },
                {
                    id: 3,
                    field: 'chargertype',
                    title: "What type of charger does the vehicle require?",
                    type: "button",
                    options: ["Type1", "Type2"],
                },
                {
                    id: 4,
                    field: 'chargermethod',
                    title: "Which charging method do you need?",
                    type: "button",
                    options: ["DC Fast Charging", "Wireless Charging"],
                },
            ],

    },
    reducers: {

    }

})

export default EVcharge1slice.reducer
