
// import types

import type { FC } from "react";
import type {TechnologyCard} from "../../utils/ProjectsData"


// import modules
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// TS types

type Props = {
    obj:TechnologyCard,
    index:number
}


// main component
const ProjectTechnology : FC<Props> = ({obj, index}) => {

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

    return (
        <section ref={ref} key={index} className={`opacity-0 ${visible ? "animate-fadeInUp" : ""} relative flex flex-col justify-start items-center shadow-md ${obj.shadowColor} rounded-lg p-5 hover:scale-105 transition-transform duration-75 ease-in-out`}>
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

// export components
export default ProjectTechnology;