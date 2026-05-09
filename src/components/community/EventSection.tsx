

// import types
import { type FC } from "react";

// import modules
import {useEffect, useRef, useState} from "react"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// import assets




// TS types
type Props = {
    title:string,
    subtitle:string,
    category:string,
    results:string[],
    linkedinProfile?:string,
}

// main component
const EventSection : FC<Props> = ({title, subtitle, category, results, linkedinProfile}) => {
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
    }, [])

    return (
        <section className={`p-2 rounded-xl bg-zinc-900 shadow-md opacity-0 shadow-red-800 ${visible ? "animate-fadeInUp" : ""}`}>
            <h2 ref={ref} className="font-bold text-center text-2xl">{title}</h2>
            <h3 className="font-bold text-center text-xl text-red-800 mt-1">{category}</h3>
            <h3 className="font-bold text-center text-xl text-zinc-700 mt-1">{subtitle}</h3>
            <h4 className="font-bold  my-5 text-center text-xl">Event results:</h4>
            <section className="flex justify-center">
                <section className="flex flex-col justify-start items-start mb-5 gap-y-2">
                    {results.map((obj, index) => <p className="font-bold text-zinc-600 flex items-center justify-between" key={index}><FontAwesomeIcon className="text-green-600 mx-3 scale-110" icon={faCircleCheck}/>{obj}</p>)}
                </section>
            </section>
            {
                linkedinProfile &&
                <section className="flex justify-center">
                    <a href={linkedinProfile} className="m-2 p-2 bg-blue-900 hover:bg-blue-800 hover:scale-105 text-white font-bold cursor-pointer rounded-md transition-all duration-100 ease-in-out">
                        <FontAwesomeIcon icon={faLinkedin}/> Linkedin profile
                    </a>
                </section>
            }
        </section>
    )
}

// export components
export default EventSection;