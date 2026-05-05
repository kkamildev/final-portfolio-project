

// import types
import { type FC, type ReactNode } from "react";

// import modules
import PageTitle from "../components/PageTitle";
import SEO from "../utils/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// import assets
import me from "../assets/me.jpg"



// TS types
type Props = {

}

// main component
const ProjectsPage : FC<Props> = ({}) => {

    const [projects, setProjects] = useState<ReactNode[]>([]);

    const searchProjects = (searchString : string) => {
        
    }

    return(
        <>
            <SEO
                title="Projects - KKamildev Portfolio"
                desc="Hi my name is Kamil Kijak, I am student of computer science. So find out about the most important - my projects"
                url="https://aboutme.pixlesofte.com/projects"
                img={me}
            />
            <section className="m-2 p-2 flex flex-col text-white">
                <PageTitle title="Projects" subtitle="So find out about the most important - my projects"/>
                <section className="my-10">
                    <h1 className="text-3xl font-extrabold">Search Projects</h1>
                    <section className="flex items-center mt-5 p-2 bg-zinc-800 text-2xl rounded-2xl">
                        <label htmlFor="search-input" className=""><FontAwesomeIcon icon={faMagnifyingGlass}/></label>
                        <input type="text" id="search-input" className="w-full font-bold ml-3 focus:outline-none focus:ring-0" placeholder="Search..."
                            onChange={(e) => searchProjects(e.target.value)}
                        />
                    </section>
                </section>
                <section className="my-10">
                    <h1 className="text-3xl font-extrabold">Found projects</h1>
                    <h1 className="text-2xl font-extrabold text-zinc-700 mt-2">{projects.length} results</h1>
                    <section className="h-2.5 bg-red-800 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="grid grid-cols-1 xl:grid-cols-2 gap-20">
                    {
                        projects
                    }
                </section>
            </section>
        </>
    )
}

// export components
export default ProjectsPage;