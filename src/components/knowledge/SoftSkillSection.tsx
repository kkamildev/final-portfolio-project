

// import types
import { type FC } from "react";

// import modules
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";


// TS types
type Props = {
    title:string,
    include:string[],
}

// main component
const SoftSkillSection : FC<Props> = ({title, include}) => {

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
        <section className={`p-2 rounded-xl bg-zinc-900 shadow-md opacity-0 shadow-red-800 ${visible ? "animate-fadeInUp" : ""} hover:scale-105 transition-transform duration-100 ease-in-out`}>
            <h2 ref={ref} className="font-bold text-center text-2xl">{title}</h2>
            <h4 className="font-bold  my-5 text-center text-xl">Skill includes:</h4>
            <section className="flex justify-center">
                <section className="flex flex-col justify-start items-start mb-5 gap-y-2">
                    {include.map((obj, index) => <p className="font-bold text-zinc-600 flex items-center justify-between" key={index}><FontAwesomeIcon className="text-green-600 mx-3 scale-110" icon={faCircleCheck}/>{obj}</p>)}
                </section>
            </section>
        </section>
    )
}

// export components
export default SoftSkillSection;