import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

function AutoPlay() {

    const navigate=useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1,
        cssEase: "linear"
    };

    const cards = [
        {
            title: "Ev Charge",
            url: '/images/evcharge.svg'
        },
        {
            title: "Fuel Delivery",
            url: '/images/fueldelivery.svg'
        },
        {
            title: "Impound",
            url: '/images/impound.svg'
        },
        {
            title: "Jump Start",
            url: '/images/jumpstart.svg'
        },
        {
            title: "Lock Out",
            url: '/images/lockout.svg'
        },
        {
            title: "Radiator Water",
            url: '/images/radiator.svg'
        },
        {
            title: "Tyre Change",
            url: '/images/tyrechange.svg'
        },

    ]



    return (
        <div className="slider-container  flex flex-col gap-2 justify-center p-2  ">

            <Slider {...settings}>
                
                {cards.map((value) => (
                    <div className=" flex justify-center items-center   " >
                        <div  onClick={()=>navigate('/auth/signin')}   className="border-4 border-white w-27 h-27 rounded-full "  >
                            <img className="p-4"   src={value.url} alt="helll" />
                        </div>
                        <h3  className="text-white p-3 font-bold "  >{value.title}</h3>
                    </div>
                ))}

                

            </Slider>
        </div>
    );
}

export default AutoPlay;
