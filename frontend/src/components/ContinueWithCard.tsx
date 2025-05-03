import React from "react";
import { FaApple, FaGoogle, FaLinkedin } from "react-icons/fa";

interface ContinueWithCardProps {
    name: string;
    icon?: React.ReactNode;
}

export default function ContinueWithCard({name, icon}: ContinueWithCardProps) {
    
    return (
        <div className="flex justify-center border-[1px] w-full border-black rounded-[8px] p-2 relative font-semibold">
            <span className="absolute left-3 top-2 bg-white rounded-full ">
                {icon}
            </span>
            {name} ile Devam Et
        </div>
    )
}