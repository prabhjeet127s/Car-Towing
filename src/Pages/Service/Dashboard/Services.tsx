
import ServiceCard from "./ServiceCard"




const Services = () => {

    
    

    const servicecard = [

        {
            title: "Ev charge",
            img: '/images/evcharge.svg',
        },
        {
            title:'fuel Delivery',
            img:'/images/fueldelivery.svg'
        },
        {
            title:'Impound',
            img:'/images/impound.svg',

        },
        {
            title:'Jump Start',
            img:'/images/jumpstart.svg'
        },
        {
            title:'Lock Out',
            img:'/images/lockout.svg'

        }
    ]

    return (
        <>

             <div className="grid  overflow-x-hidden w-full md:grid-cols-3 md:px-12 gap-8    p-3">
                {servicecard.map((item, index) => (
                    <ServiceCard key={index} title={item.title} img={item.img} />
                ))}

            </div>



        </>
    )
}

export default Services;
