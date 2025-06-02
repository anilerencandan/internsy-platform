import React from "react";

interface ContinueWithCardProps {
    name: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    style?: string;
}

export default function ContinueWithCard({name, icon, style, onClick}: ContinueWithCardProps) {
    
    return (
        <button onClick={onClick} className={`flex justify-center border-[1px] w-full border-black rounded-[8px] p-2 relative font-semibold ${style} group  hover:bg-primary hover:text-white`}>
            <span className="absolute left-3 top-2 bg-white rounded-full  group-hover:bg-primary">
                {icon}
            </span>
            {name} ile Devam Et
        </button>
    )
}

