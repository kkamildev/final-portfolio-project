
// import types
import type { FC } from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// import modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// TS types
type Props = {
    title:string,
    description:string,
    icon:IconDefinition,
    shadowColorDesc?:string
}

// main component
const NavButton : FC<Props> = ({title, description, icon, shadowColorDesc}) => {
    return (
        <li>
            <button>
                <section>
                    <FontAwesomeIcon icon={icon} className={`${shadowColorDesc}`}/>
                    <h2>{title}</h2>
                </section>
                <p>
                    {description}
                </p>
            </button>
        </li>
    )
}

// export components
export default NavButton;