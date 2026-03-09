import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function AutoPlay() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1,
        cssEase: "linear"
    };

    const car = [
        { url: "/images/aston-martin.png" },
        { url: "/images/audi.png" },
        { url: "/images/bugati.png" },
        { url: "/images/ferrari.png" },
        { url: "/images/hyundai.png" },
        { url: "/images/jaguar.png" },
        { url: "/images/lambo.png" },
        { url: "/images/mg.png" },
        
    ];

    


    return (
        <div className="slider-container  flex flex-col gap-2 justify-center p-2  ">

            <Slider {...settings}>

                {car.map((value) => (
                    <div className=" bg-cover bg-fit  h-25 w-30   " >
                        
                            <img className="p-4 h-30 w-40  bg-cover " src={value.url} alt="helll" />
                        

                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default AutoPlay;
