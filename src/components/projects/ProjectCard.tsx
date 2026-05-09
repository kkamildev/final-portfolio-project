
// import types
import type { FC} from "react";
import {type SetURLSearchParams } from "react-router-dom";

// import modules
import { useState, useRef, useEffect } from "react";
import ProjectsData from "../../utils/ProjectsData";
import { Link } from "react-router-dom";


// import assets




// TS types
type Props = {
    projectName:string,
    image:string,
    tags:string[],
    tagsColors:string[],
    simpleDescription?:string,
    completed?:boolean,
    onChooseTag:SetURLSearchParams
}

// main component
const ProjectCard : FC<Props> = ({projectName, image, tags, tagsColors, simpleDescription, completed = false, onChooseTag}) => {

    const [visible, setVisible] = useState<boolean>(false);
    
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        })
        if(ref.current)
        observer.observe(ref.current);
    }, []);

    return(
        <section className={`text-white p-2 flex flex-col justify-between items-center shadow-md shadow-red-800 rounded-xl opacity-0 ${visible ? "animate-fadeInUp" : ""}`}>
            <section className="flex flex-col items-center">
                <h2 className="text-3xl font-bold text-center" ref={ref}>{projectName}</h2>
                {
                    completed ? <p className="px-4 py-2 m-4 rounded-lg text-xl font-extrabold text-center bg-green-700">Completed</p> :
                    <p className="px-4 py-2 m-4 rounded-lg font-extrabold text-xl text-center bg-yellow-600">In progress</p>
                }
                {
                    simpleDescription &&
                    <p className="font-bold text-zinc-700 text-center text-xl italic my-2 w-[75%] mb-5">{simpleDescription}</p>
                }
                <img src={image} alt={`${projectName} project image`} className="rounded-xl w-[75%]" loading="lazy"/>
                <h3 className="text-2xl font-bold text-white-700 text-center my-5">Categories:</h3>
                <section className="grid grid-cols-1 xl:grid-cols-2 mb-5 gap-3">
                    {
                        tags.map((obj, index) => 
                            <section onClick={() => onChooseTag({search: "#" + obj})} title="View category" key={index} className={`p-2 ${tagsColors[index] || "bg-red-800"} rounded-lg font-extrabold text-center hover:scale-105 transition-transform duration-100 ease-in-out cursor-pointer`}>
                                {obj}
                            </section>
                        )
                    }
                </section>
            </section>
            <section className="flex justify-center mt-5">
                <Link to={`/projects/${ProjectsData().findIndex((obj) => obj.name === projectName)}`}>
                    <button className="m-2 p-2 bg-red-900 hover:bg-red-800 hover:scale-105 text-white text-xl font-bold cursor-pointer rounded-md transition-all duration-100 ease-in-out">
                        Show Project
                    </button>
                </Link>
            </section>
        </section>
    )
}

// export modules
export default ProjectCard;