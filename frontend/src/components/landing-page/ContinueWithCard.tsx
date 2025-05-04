import React from "react";
import { FaApple, FaGoogle, FaLinkedin } from "react-icons/fa";

interface ContinueWithCardProps {
    name: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    style?: string;
}

export default function ContinueWithCard({name, icon, style, onClick}: ContinueWithCardProps) {
    
    return (
        <button onClick={onClick} className={`flex justify-center border-[1px] w-full border-black rounded-[8px] p-2 relative font-semibold ${style}`}>
            <span className="absolute left-3 top-2 bg-white rounded-full ">
                {icon}
            </span>
            {name} ile Devam Et
        </button>
    )
}

