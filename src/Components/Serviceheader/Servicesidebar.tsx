import React from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

const Servicesidebar = () => {
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
        <aside className="fixed left-60 top-0 h-screen w-80 bg-gray-100 shadow-lg flex flex-col">

               <div className="flex justify-end p-4">
                <button className=" hover:text-gray-700">
                    <X size={26} />
                </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col p-6 gap-1">
                {sidebarMenu.map((item) => (

                    <div  className={`flex   items-center gap-4 py-3 border-b border-gray-300 hover:text-purple-700 transition`}
                    >
                        <img src={item.img} alt="" className="w-6 h-6" />
                        <span className=" ">{item.title}</span>
                    </div>
                ))}
            </div>

            {/* Spacer */}
            <div className="flex-grow"></div>

            {/* Logout Button Bottom */}
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