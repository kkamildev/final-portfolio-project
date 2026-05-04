

// import types
import { type FC } from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// import modules
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// TS types
type Props = {
    title:string,
    description:string,
    icon:IconDefinition,
    iconClassName?:string,
    className?:string,
    href:string
}

// main component
const SocialSection : FC<Props> = ({title, description, icon, iconClassName = "", className = "shadow-red-800", href}) => {

    const [visible, setVisible] = useState<boolean>(false);
    
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        })

        observer.observe(ref.current);
    }, [])

    return (
        <a href={href} className={`p-2 flex flex-col lg:flex-row justify-start items-center hover:scale-105 transition-transform duration-100 ease-in-out rounded-xl bg-zinc-900 shadow-md opacity-0 ${className} ${visible ? "animate-fadeInUp" : ""}`}>
            <section className="flex flex-col lg:flex-row justify-start items-center m-5 gap-5">
                <FontAwesomeIcon icon={icon} ref={ref} className={iconClassName + " text-7xl"}/>
                <h2 className="text-3xl font-bold">{title}</h2>
            </section>
            <p className="font-bold text-zinc-700 text-xl m-5 text-center">{description}</p>
        </a>
    )
}

// export components
export default SocialSection;