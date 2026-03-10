import React from 'react'

const Aboutcard = ({title,desc,img}) => {
  return (
     <div className="bg-white rounded-2xl shadow-md p-8 flex gap-6 hover:text-white  hover:bg-purple-900 items-start hover:shadow-lg transition">
      
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
        {/* Add your image/icon here */}
        {/* <img src="" alt="" /> */}
      </div>

      <div>
        <img src={img} alt="" />
        <h3 className="text-xl font-semibold  mb-3">{title}</h3>
        <p className="">{desc}</p>
      </div>
    </div>
  )
}

export default Aboutcard
