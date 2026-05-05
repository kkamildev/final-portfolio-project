
// import types
import {type FC } from "react";

// import modules
import {useState, useEffect} from "react"
import { faUser, faBook, faWrench, faEarthEurope, faCode, faLocationDot, faBars} from "@fortawesome/free-solid-svg-icons";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";


// TS types
type Props = {

}

// main component
const Navbar : FC<Props> = ({}) => {

    const location = useLocation();

    const [linksActivations, setLinksActivations] = useState<boolean[]>([true, false, false, false, false, false]);
    const [showed, setShowed] = useState<boolean>(false);

    const arrayAfterChoose = (index: number) : boolean[] => {
        let prev = Array(6).fill(false);
        prev[index] = true;
        setShowed(false);
        return prev;
    }

    useEffect(() => {
        const pages : string[] = ["/", "/history", "/knowledge", "/projects", "/community", "/contact"];
        for(let i = 0;i<pages.length;i++) {
            if(pages[i] == location.pathname) {
                setLinksActivations(() => arrayAfterChoose(i));
            }
        }
    }, []);

    return (
        <>
            <nav className={`h-screen bg-zinc-950 rounded-r-2xl p-3 text-white flex flex-col justify-between transition-transform duration-200 -translate-x-full lg:translate-x-0 overflow-y-scroll absolute z-50 ${showed ? "translate-x-0" : ""}`}>
                <section>
                    <section className="flex flex-col justify-center items-center">
                        <h1 className="font-bold text-3xl">Explore Portfolio</h1>
                    </section>
                    <section className="flex flex-col justify-center items-center mt-6">
                        <p className="font-bold text-2xl text-zinc-700 text-center">Find out informations<br/> about me</p>
                    </section>
                    <section className="mt-5">
                        <ul className="flex flex-col gap-y-5">
                            <NavButton
                                title="About me"
                                description="My Person, beginnings in IT, current situation, future in IT brand"
                                icon={faUser}
                                shadowColorDesc="shadow-red-800/70"
                                destination="/"
                                selected={linksActivations[0]}
                                onClick={() => setLinksActivations(() => arrayAfterChoose(0))}
                            />
                            <NavButton
                                title="My history"
                                description="Learn history, work history, current workplace and learning path"
                                icon={faBook}
                                shadowColorDesc="shadow-orange-800/70"
                                destination="/history"
                                selected={linksActivations[1]}
                                onClick={() => setLinksActivations(() => arrayAfterChoose(1))}
                            />
                            <NavButton
                                title="Knowledge"
                                description="Skills, certificates, soft-skills, languages"
                                icon={faWrench}
                                shadowColorDesc="shadow-yellow-800/70"
                                destination="/knowledge"
                                selected={linksActivations[2]}
                                onClick={() => setLinksActivations(() => arrayAfterChoose(2))}
                            />
                            <NavButton
                                title="Projects"
                                description="Apps, websites, technologies, games"
                                icon={faCode}
                                shadowColorDesc="shadow-green-800/70"
                                destination="/projects"
                                selected={linksActivations[3]}
                                onClick={() => setLinksActivations(() => arrayAfterChoose(3))}
                            />
                            <NavButton
                                title="Community"
                                description="About community, IT events, my organizations"
                                icon={faEarthEurope}
                                shadowColorDesc="shadow-cyan-800/70"
                                destination="/community"
                                selected={linksActivations[4]}
                                onClick={() => setLinksActivations(() => arrayAfterChoose(4))}
                            />
                            <NavButton
                                title="Contact"
                                description="Socials, location, email"
                                icon={faLocationDot}
                                shadowColorDesc="shadow-purple-800/70"
                                destination="/contact"
                                selected={linksActivations[5]}
                                onClick={() => setLinksActivations(() => arrayAfterChoose(5))}
                            />
                        </ul>
                    </section>
                </section>
                <section className="mb-2 mt-5">
                    <p className="font-bold text-zinc-700 text-center">&copy; Kkamildev 2026</p>
                </section>
            </nav>
            <section className="flex flex-col justify-start lg:hidden fixed z-40" onClick={() => setShowed(true)}>
                <button className="p-5 bg-zinc-950 m-5 rounded-2xl w-17.5 h-17.5 cursor-pointer hover:bg-[#0f0f0f]">
                    <FontAwesomeIcon icon={faBars} className="text-white text-2xl"/>
                </button>
            </section>
            {
                showed && 
                <section className="absolute z-5 bg-black/30 min-w-screen min-h-screen block lg:hidden" onClick={() => setShowed(false)}>
                        
                </section>
            }
        </>
    )
}

// export components
export default Navbar;