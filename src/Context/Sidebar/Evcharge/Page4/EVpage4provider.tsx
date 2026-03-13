import React from 'react'
import EVPage4context from './EVpage4context'

const EVpage4provider = ({children}) => {
     const evpage4data = [
    {
      id: 1,
      title: "Pickup Location",
      type: "input",
      placeholder: "Enter pickup location"
    }
  ];
  return (
    <EVPage4context.Provider value={evpage4data} >
        {children}
    </EVPage4context.Provider>
  )
}

export default EVpage4provider
