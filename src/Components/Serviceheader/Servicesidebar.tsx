import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import Sidebarcontext from "../../Context/Sidebar/SideContext";

const Servicesidebar = () => {

    const { sidebaropen, setsidebaropen } = useContext(Sidebarcontext)


    const sidebarMenu = [
        {
            title: "Book A Service",
            route: "/book-service",
            img: "/images/terms.svg"
        },
        {
            title: "Home",
            route: "/dashboard",
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
                  ${sidebaropen ? "md:max-w-xl" : "w-0 overflow-hidden"}
                fixed md:left-98 top-0 h-screen  bg-gray-100  z-100 shadow-lg flex flex-col`}>

            <div className="flex justify-end p-4">

                <button onClick={() => setsidebaropen(!sidebaropen)} className=" hover:text-gray-700">
                    <X size={26} />
                </button>
            </div>

            <div className="flex flex-col p-6 gap-1">
                {sidebarMenu.map((item) => (

                    <div className={`flex   items-center gap-4 py-3 border-b border-gray-300 hover:text-purple-700 transition`}
                    >
                        <img src={item.img} alt="" className="w-6 h-6" />
                        <span className=" ">{item.title}</span>
                    </div>
                ))}
            </div>

            <div className="flex-grow"></div>

            <div className="p-6">
                <NavLink
                    to="/logout"
                    className="flex items-center gap-4 text-red-500 hover:text-red-600"
                >
                    <img src="/images/logout.png" alt="" className="w-6 h-6" />
                    <span className="text-lg font-medium">Logout</span>
                </NavLink>
            </div>
        </aside>
    );
};

export default Servicesidebar;