
// import types
import type { FC } from "react";

// import modules
import { faUser, faBook, faWrench, faEarthEurope, faCode, faLocationDot, faSearch} from "@fortawesome/free-solid-svg-icons";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// TS types
type Props = {

}

// main component
const Navbar : FC<Props> = ({}) => {
    return (
        <nav className="min-h-screen bg-zinc-950 rounded-r-2xl p-3 text-white flex flex-col justify-between overflow-y-auto absolute">
            <section>
                <section className="flex flex-col justify-center items-center">
                    <h1 className="font-bold text-3xl">Explore Portfolio</h1>
                    <p className="font-bold text-xl mt-2">Find informations via search</p>
                </section>
                <section className="flex flex-col justify-center items-center mt-6">
                    <section className="m-2 rounded-xl bg-zinc-900">
                        <label htmlFor="search">
                            <FontAwesomeIcon icon={faSearch} className="px-2 scale-150"/>
                        </label>
                        <input type="text" placeholder="Search..." className=" p-3 rounded-xl w-75 font-bold" id="search"/>
                    </section>
                    <section>
                        {
                            // Results search here will come
                        }
                    </section>
                </section>
                <section className="mt-5">
                    <ul className="flex flex-col gap-y-5">
                        <NavButton
                            title="About me"
                            description="My Person, beginnings in IT, current sitation, future in IT brand"
                            icon={faUser}
                            shadowColorDesc="shadow-red-800/70"
                            destination="/aboutme"
                            selected={true}
                        />
                        <NavButton
                            title="My history"
                            description="Learn history, work history, current workplace and learning path"
                            icon={faBook}
                            shadowColorDesc="shadow-orange-800/70"
                            destination="/history"
                            selected={false}
                        />
                        <NavButton
                            title="Knowledge"
                            description="Skills, courses, certificates, soft-skills"
                            icon={faWrench}
                            shadowColorDesc="shadow-yellow-800/70"
                            destination="/knowledge"
                            selected={false}
                        />
                        <NavButton
                            title="Projects"
                            description="Apps, websites, technologies, games"
                            icon={faCode}
                            shadowColorDesc="shadow-green-800/70"
                            destination="/projects"
                            selected={false}
                        />
                        <NavButton
                            title="Organizations"
                            description="My organizations, organizations participating, partnership"
                            icon={faEarthEurope}
                            shadowColorDesc="shadow-cyan-800/70"
                            destination="/organizations"
                            selected={false}
                        />
                        <NavButton
                            title="Contact"
                            description="Socials, location, email, collaboration"
                            icon={faLocationDot}
                            shadowColorDesc="shadow-purple-800/70"
                            destination="/contact"
                            selected={false}
                        />
                    </ul>
                </section>
            </section>
            <section className="mb-2 mt-5">
                <p className="font-bold text-zinc-700 text-center">&copy; Kkamildev 2026</p>
            </section>
        </nav>
    )
}

// export components
export default Navbar;