
// import types
import type { FC } from "react";

// import modules
import { useRef, useEffect, useState } from "react";
import Circle from "../shapes/Circle";
import anime from "animejs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// TS types
type Props = {
    value?:number,
    title:string,
    mainColorClass?:string,
    shadowColorClass?:string,
    examples:string[]
}

// main component
const ProgrammingSection : FC<Props> = ({value, title, mainColorClass, shadowColorClass, examples}) => {

    const [animationProgress, setAnimationProgress] = useState<number>(0);
    
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                anime({
                    targets: { v: 0 },
                    v: 1,
                    duration: 1000,
                    easing: "easeOutQuad",
                    update(anim) {
                        setAnimationProgress(Number(anim.animations[0].currentValue));
                    }
                });
            } else {
                setAnimationProgress(0);
            }
        })

        observer.observe(ref.current);
    }, [])

    return(
        <section ref={ref} className={`relative flex flex-col justify-center items-center shadow-md ${shadowColorClass} rounded-lg p-5 hover:scale-105 transition-transform duration-75 ease-in-out`}>
            <Circle value={value * animationProgress} mainColorClass={mainColorClass}/>
            <h3 className="text-3xl font-bold mt-5">{title}</h3>
            <h2 className="text-2xl font-bold my-5">Examples:</h2>
            <section className="flex justify-center">
                <section className="flex flex-col justify-start items-start mb-5 gap-y-2">
                    {examples.map((obj, index) => <p className="font-bold text-zinc-600" key={index}><FontAwesomeIcon className="text-green-600 mx-3 scale-110" icon={faCircleCheck}/>{obj}</p>)}
                </section>
            </section>
        </section>
    )
}

// module exports
export default ProgrammingSection;