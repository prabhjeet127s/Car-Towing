import React from 'react'
import EVPage1context from './EVpage1context'

const EVpage1provider = ({children}) => {

      const evpage1data =
     [
        {
            id: 1,
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
            title: "Does the vehicle have a charging cable?",
            type: "button",
            options: ["Yes", "No"],
        },
        {
            id: 3,
            title: "What type of charger does the vehicle require?",
            type: "button",
            options: ["Type1", "Type2"],
        },
        {
            id: 4,
            title: "Which charging method do you need?",
            type: "button",
            options: ["DC Fast Charging", "Wireless Charging"],
        },
    ];



  return (
    <EVPage1context.Provider value={evpage1data}>
        {children}

    </EVPage1context.Provider>
  )
}

export default EVpage1provider
