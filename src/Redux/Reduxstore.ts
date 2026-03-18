import { configureStore } from "@reduxjs/toolkit";
import pageswitchReducer from "./Slice/PageSwitichslice";
import Evcharger1Reducer from './Slice/EVcharge/EVcharge1slice'
import EVcharge2Reducer from './Slice/EVcharge/EVcharhe2slice'
import EVcharge3Reducer from'./Slice/EVcharge/EVcharge3slice'
import EVcharge4Reducer from './Slice/EVcharge/EVcharge4slice'
import EVpayloadReducer from './Slice/Payload/EVchargepayload/EVpayloadslice'
const store = configureStore({

    reducer: {

        pageswitch: pageswitchReducer,
        EVcharge1: Evcharger1Reducer,
        EVcharge2: EVcharge2Reducer,
        EVcharge3:EVcharge3Reducer,
        EVcharge4:EVcharge4Reducer,
        EVpayload:EVpayloadReducer
        
    }
})


export default store;