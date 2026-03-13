/* eslint-disable react-refresh/only-export-components */ 



import { createContext } from "react";
import { useState } from "react";

export  const Pagesswitchcontext=createContext<any>(null);


export default function PagesswitchProvider({children}:any){


    const [page, setpage] = useState(2)


    return(


        <Pagesswitchcontext.Provider  value={{page,setpage}} >
            {children}
        </Pagesswitchcontext.Provider>
    )
        




    


}




