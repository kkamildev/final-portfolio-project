
// import types
import type { FC } from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// import modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


// TS types
type Props = {
    title:string,
    description:string,
    icon:IconDefinition,
    shadowColorDesc?:string,
    destination:string,
    selected:boolean
}

// main component
const NavButton : FC<Props> = ({title, description, icon, shadowColorDesc = "shadow-white/12", destination, selected}) => {
    return (
        <li className={`bg-zinc-900 rounded-md hover:scale-105 mx-2 transition-transform duration-75 ease-in-out ${selected && "scale-105 shadow-md shadow-white/50"}`}>
            <Link to={destination} className="flex flex-col cursor-pointer">
                <section className="flex items-center">
                    <FontAwesomeIcon icon={icon} className={`${shadowColorDesc} p-2 m-2 rounded-md bg-zinc-900 shadow-md`}/>
                    <h2 className="font-bold text-xl">{title}</h2>
                </section>
                <p className="p-2 w-100">
                    {description}
                </p>
            </Link>
        </li>
    )
}

// export components
export default NavButton;