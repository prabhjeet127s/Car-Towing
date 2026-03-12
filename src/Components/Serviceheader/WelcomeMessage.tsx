import React from "react";

const WelcomeMessage = () => {
    return (
        <div className="flex items-start p-3 gap-3 w-full pl-10">
            <img
                src="/images/person.gif"
                alt="Animated Person"
                className="w-12 sm:w-16 mt-1 shrink-0"
            />
            <div>
                <div className="bg-white border rounded-lg px-4 py-3 text-center max-w-[400px] relative border-gray-300">
                    <p className="text-black text-sm">
                        Welcome to Towber towing!!! We are here to help you out,
                        please select one of the following.
                    </p>
                    <span className="absolute bottom-[-14px] left-[10px] w-[20px] h-[20px] bg-white border-l border-b border-gray-300 rotate-45"></span>

                </div>
            </div>

        </div>
    );
};

export default WelcomeMessage;