import React from "react";

const ServiceCard = ({ title, img }) => {
  return (
    <div     className="flex flex-col items-center gap-3 cursor-pointer">
      
      {/* Circle */}
      <div className="w-24 h-24 bg-purple-900 rounded-full flex items-center justify-center">
        <img src={img} alt={title} className="w-18 h-18" />
      </div>

      {/* Title */}
      <p className="text-sm font-medium text-purple-800">
        {title}
      </p>

    </div>
  );
};

export default ServiceCard;