import ServiceCard from "./ServiceCard"




const Services = () => {

    //const {setpage,page}=useContext(Pagesswitchcontext)

    const servicecard = [

        {
            title: "Ev charge",
            img: '/images/evcharge.svg',

            data: [
                {
                    id: 1,
                    title: "Vehicle Type",
                    type: "select",
                    options: [
                        "SUV",
                        "JEEP",
                        "SEDAN",
                        "SPORTS CAR",
                        "AMBULANCE",
                        "TAXI",
                        "TRUCK",
                    ],
                },
                {
                    id: 2,
                    title: "Does the vehicle have a charging cable?",
                    type: "button",
                    options: ["Yes", "No"],
                },
                {
                    id: 3,
                    title: "What type of charger does the vehicle require?",
                    type: "button",
                    options: ["Type1", "Type2"],
                },
                {
                    id: 4,
                    title: "Which charging method do you need?",
                    type: "button",
                    options: ["DC Fast Charging", "Wireless Charging"],
                },
            ]
        }
    ]

    return (
        <>

             <div className="grid  overflow-x-hidden w-full md:grid-cols-4 md:px-17 gap-6 m p-4">
                {servicecard.map((item, index) => (
                    <ServiceCard key={index} title={item.title} img={item.img} />
                ))}

            </div>



        </>
    )
}

export default Services;
