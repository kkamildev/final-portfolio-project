// import types
import { type FC } from "react";
import { type Project } from "../utils/ProjectsData";

// import modules
import { useEffect, useState} from "react";
import {useLocation, useNavigate, useParams } from "react-router-dom";
import SEO from "../utils/SEO";
import ProjectsData from "../utils/ProjectsData";
import PageTitle from "../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import AnimatedBar from "../components/AnimatedBar";



// TS types
type Props = {

}

// main component
const ProjectPage : FC<Props> = ({}) => {

    const {id} = useParams();
    const [project, setProject] = useState<Project>(ProjectsData()[0]);
    const navigate = useNavigate();

    useEffect(() => {
        if(ProjectsData().length <= Number(id)) {
            navigate("/projects");
        } else {
            setProject(ProjectsData()[Number(id)]);
        }
    }, [id]);

    const { pathname } = useLocation();

    useEffect(() => {
        const container = document.getElementById("scroll-container");
        if (!container) return;

        container.scrollTo(0, 0);

        setTimeout(() => container.scrollTo(0, 0), 0);
    }, [pathname]);

    return (
        <>
            <SEO
                title={`Project #${Number(id) + 1} - ${project.name} - KKamildev Portfolio`}
                desc={`Hi my name is Kamil Kijak, I am student of computer science. ${project.name} project`}
                url={`https://aboutme.pixlesofte.com/project/${id}`}
                img={project.image}
            />
            <section className="m-2 p-2 flex flex-col text-white">
                <PageTitle title={`Project #${Number(id) + 1} - ${project.name}`} subtitle={project.simpleDescription}/>
                <section className="my-5">
                    <h1 className="text-3xl font-extrabold">Project Sources</h1>
                    <section className="h-2.5 bg-red-800 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="flex flex-col md:flex-row justify-start gap-10">
                    {
                        project.sources.map((obj, index) =>
                        <a href={obj.href} key={index} className={`${obj.buttonColor} p-2 hover:scale-105 text-white text-2xl font-bold cursor-pointer rounded-md transition-all duration-100 ease-in-out`}><FontAwesomeIcon icon={obj.icon}/> {obj.text}</a>
                    )
                    }
                </section>
                <section className="my-10">
                    <h1 className="text-3xl font-extrabold">Used Technologies</h1>
                    <section className="h-2.5 bg-red-800 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 mb-10">
                    {
                        project.technologies.map((obj, index) => 
                            <section key={index} className={`relative flex flex-col justify-start items-center shadow-md ${obj.shadowColor} rounded-lg p-5 hover:scale-105 transition-transform duration-75 ease-in-out`}>
                                <h3 className="text-4xl font-bold mt-5 mb-10">{obj.title}</h3>
                                <h2 className="text-2xl font-bold my-5">Role:</h2>
                                <section className="flex justify-center">
                                    <section className="flex flex-col justify-start items-start mb-5 gap-y-2">
                                        {obj.points.map((obj, index) => <p className="font-bold text-zinc-600 flex items-center justify-between" key={index}><FontAwesomeIcon className="text-green-600 mx-3 scale-110" icon={faCircleCheck}/>{obj}</p>)}
                                    </section>
                                </section>
                            </section>
                        )
                    }
                </section>
                <section className="my-10">
                    <AnimatedBar
                        animationDuration={Math.random() * 1000 + 1000}
                        className="bg-red-900 m-0!"
                        borders={["20%", "60%"]}
                    />
                    <AnimatedBar
                        animationDuration={Math.random() * 1000 + 1000}
                        className="bg-red-800 m-0!"
                        borders={["20%", "60%"]}
                    />
                    <AnimatedBar
                        animationDuration={Math.random() * 1000 + 1000}
                        className="bg-red-700 m-0!"
                        borders={["20%", "60%"]}
                    />
                </section>
                {
                    project.text.map((obj, index) =>
                    <React.Fragment key={index}>
                        <section className="mt-10 mb-5">
                            <h1 className="text-3xl font-extrabold">{obj.title}</h1>
                            <section className={`h-2.5 ${obj.barColor} my-5 rounded-2xl w-1/2`}></section>
                        </section>
                        <p className="font-bold text-2xl text-zinc-600 mt-2">{obj.content}</p>
                    </React.Fragment>
                    )
                }
                <section className="my-10">
                    <AnimatedBar
                        animationDuration={Math.random() * 1000 + 1000}
                        className="bg-red-900 m-0!"
                        borders={["20%", "60%"]}
                    />
                    <AnimatedBar
                        animationDuration={Math.random() * 1000 + 1000}
                        className="bg-red-800 m-0!"
                        borders={["20%", "60%"]}
                    />
                    <AnimatedBar
                        animationDuration={Math.random() * 1000 + 1000}
                        className="bg-red-700 m-0!"
                        borders={["20%", "60%"]}
                    />
                </section>
                {
                    project.images.length > 0 &&
                    <section className="mb-10 mt-20">
                        <h1 className="text-3xl font-extrabold">Screens from project</h1>
                        <section className="h-2.5 bg-red-800 my-5 rounded-2xl w-1/2"></section>
                    </section>
                }
                <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {
                        project.images.map((obj, index) => 
                            <section key={index} className={`flex flex-col justify-start items-center rounded-b-lg p-5 hover:scale-105 transition-transform duration-75 ease-in-out`}>
                                <img src={obj.image} alt={obj.alt} />
                                <p className="p-2 font-bold text-xl">{obj.title}</p>
                            </section>
                        )
                    }
                </section>
            </section>
        </>
    )
}

// export components
export default ProjectPage;