import React from 'react'
import EVPage2context from './EVpage2context'

const EVpage2provider = ({children}) => {

  
  const evpage2data = [
    {
      id: 1,
      title: "You are booking service for?",
      type: "button",
      options: [
        { label: "For Me", value: "me" },
        { label: "For Someone Else", value: "someone_else" }
      ]
    }
  ];

  return (
    <EVPage2context.Provider value={evpage2data} >
      {children}


    </EVPage2context.Provider>
    
    
    
      
    
  )
}

export default EVpage2provider
