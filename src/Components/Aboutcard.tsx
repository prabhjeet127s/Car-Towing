import React from 'react'

const Aboutcard = ({title,desc,img}:any) => {
  return (
     <div className="bg-white rounded-2xl shadow-md p-8 flex gap-6 hover:text-white  hover:bg-purple-900 items-start hover:shadow-lg transition">
      <div>
        {img}
        <h3 className="text-xl font-semibold mt-2 mb-1">{title}</h3>
        <p className="">{desc}</p>
      </div>
    </div>
  )
}

export default Aboutcard
