
// import types
import type { FC } from "react";

// import modules
import { faUser, faBook, faWrench, faEarthEurope, faCode, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import NavButton from "./NavButton";


// TS types
type Props = {

}

// main component
const Navbar : FC<Props> = ({}) => {
    return (
        <nav>
            <section>
                <h1>Explore Portfolio</h1>
                <p>Find informations via search</p>
            </section>
            <section>
                <input type="text" placeholder="Search..." />
                <section>
                    {
                        // Results search here will come
                    }
                </section>
            </section>
            <section>
                <ul>
                    <NavButton
                        title="About me"
                        description="My Person, beginnings in IT, current sitation, future in IT brand"
                        icon={faUser}
                    />
                    <NavButton
                        title="My history"
                        description="Learn history, work history, current workplace and learning path"
                        icon={faBook}
                    />
                    <NavButton
                        title="Knowledge"
                        description="Skills, courses, certificates, soft-skills"
                        icon={faWrench}
                    />
                    <NavButton
                        title="Projects"
                        description="Apps, websites, technologies, games"
                        icon={faCode}
                    />
                    <NavButton
                        title="Organizations"
                        description="My organizations, organizations participating, partnership"
                        icon={faEarthEurope}
                    />
                    <NavButton
                        title="Contact"
                        description="Socials, location, email, collaboration"
                        icon={faLocationDot}
                    />
                </ul>
            </section>
        </nav>
    )
}

// export components
export default Navbar;