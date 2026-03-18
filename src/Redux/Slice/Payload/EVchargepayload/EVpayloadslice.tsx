import { createSlice } from "@reduxjs/toolkit"


const EVpayloadslice = createSlice({


    name: 'EVpayload',
    initialState: {
        vehicleinformation: {
            vehicletype: "",
            chargingsupported: "",
            chargertype: "",
            chargermethod: ""
        },

        servicefor: "",

        vehiclelocation: "",

        userdetails: {
            FullName: "",
            Email: "",
            PhoneNum: "",
            VehicleNum: ""
        },

        cancelridereason: ""
    },
    reducers: {
    
        setvehicleinformation:(state,action)=>{
            state.vehicleinformation=action.payload
        }
        ,
        setservicefor:(state,action)=>{
            state.servicefor=action.payload
        },
        setvehiclelocation:(state,action)=>{
            state.vehiclelocation=action.payload
        },
        setuserdetails:(state,action)=>{
            state.userdetails=action.payload
        },
        setcancelridereason:(state,action)=>{
            state.cancelridereason=action.payload
        }


    
    


    }
}

)
export const {setvehicleinformation,setservicefor,setvehiclelocation,setuserdetails,setcancelridereason}=EVpayloadslice.actions

export default EVpayloadslice.reducer





