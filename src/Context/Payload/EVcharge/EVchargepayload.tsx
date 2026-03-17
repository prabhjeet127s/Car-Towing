/* eslint-disable react-refresh/only-export-components */


import { createContext } from "react";


import { useState } from "react";
export const EVchargepayload = createContext<any>(null)




export default function EVchargepayloadProvider({ children }) {


    //page 1
    const [vehicleinformation, setvehicleinformation] = useState(
        {
            vehicletype: "",
            chargingsupported: "",
            chargertype: "",
            chargermethod: ""
        }

    )

    // page 2
    const [servicefor, setservicefor] = useState('')

    //page4
    const [vehiclelocation, setvehiclelocation] = useState("")

    //userdetail
    const [userdetails, setuserdetails] = useState({
        FullName: '',
        Email: '',
        PhoneNum: '',
        VehicleNum: ''
    })
    //cancelride
    const [cancelridereason, setcancelridereason] = useState("")


    return (
        <EVchargepayload.Provider value={{
            vehicleinformation, setvehicleinformation, servicefor, setservicefor,
            vehiclelocation, setvehiclelocation, setuserdetails, userdetails, cancelridereason, setcancelridereason
        }} >
            {children}
        </EVchargepayload.Provider>


    )


}



