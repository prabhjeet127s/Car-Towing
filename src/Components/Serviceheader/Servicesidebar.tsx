import  { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import Sidebarcontext from "../../Context/Sidebar/SideContext";
import toast, { Toaster } from "react-hot-toast";

const Servicesidebar = () => {
    const navigate = useNavigate()

    const { sidebaropen, setsidebaropen } = useContext(Sidebarcontext)

    const handleonclick = (route: any) => {
        navigate(route)
        setsidebaropen(!sidebaropen)
    }
    const handlelogout = () => {
        toast.success('Successfully Logout')
        setTimeout(() => {
            navigate('/')

        }, 1000);

    }

    const sidebarMenu = [
        {
            title: "Book A Service",
            route: "/service",
            img: "/images/terms.svg"
        },
        {
            title: "Home",
            route: "/",
            img: "/images/home.svg"
        },
        {
            title: "Profile",
            route: "/profile",
            img: "/images/user.png"
        },
        {
            title: "Notification",
            route: "/notifications",
            img: "/images/notification.svg"
        },
        {
            title: "History",
            route: "/history",
            img: "/images/clock.png"
        },
        {
            title: "Privacy Policy",
            route: "/privacy-policy",
            img: "/images/privacy.svg"
        },
        {
            title: "Terms and Conditions",
            route: "/terms",
            img: "/images/terms.svg"
        },
        {
            title: "Delete Account",
            route: "/delete-account",
            img: "/images/Delete User.svg", danger: true
        },
    ];


    return (
        <aside className={` 
                  ${sidebaropen ? "md:max-w-xl transition duration-200 ease-in-out  " : "w-0 overflow-hidden"}
                fixed md:left-98 top-0 h-screen  bg-gray-100  z-100 shadow-lg flex flex-col`}>

            <div className="flex justify-end p-4">
                <Toaster
                    position="top-center"
                    reverseOrder={true}
                />

                <button onClick={() => setsidebaropen(!sidebaropen)} className="       hover:text-gray-700">
                    <X size={26} />
                </button>
            </div>

            <div className="flex flex-col p-6 gap-1">
                {sidebarMenu.map((item) => (

                    <div onClick={() => handleonclick(item.route)} className={`flex  hover:cursor-pointer items-center gap-4 py-3 border-b border-gray-300 hover:text-purple-700 transition`}
                    >
                        <img src={item.img} alt="" className="w-6 h-6" />
                        <span className=" ">{item.title}</span>
                    </div>
                ))}
            </div>

            <div className="grow"></div>

            <div onClick={handlelogout} className="p-6 flex items-center gap-4 text-red-500 hover:text-red-600 " >

                <img src="/images/logout.png" alt="" className="w-6 h-6" />
                <span className="text-lg font-medium">Logout</span>

            </div>
        </aside>
    );
};

export default Servicesidebar;