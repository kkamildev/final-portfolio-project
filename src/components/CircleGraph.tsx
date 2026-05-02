
// import types
import type { FC } from "react";

// import modules
import { useRef, useEffect, useState } from "react";
import Circle from "./shapes/Circle";
import anime from "animejs";

// TS types
type Props = {
    value?:number,
    title:string,
    description?:string
    mainColorClass?:string,
    shadowColorClass?:string
}

// main component
const CircleGraph : FC<Props> = ({value, title, mainColorClass, description, shadowColorClass}) => {

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
            <p className="text-xl font-bold text-zinc-700 w-full text-center">{description}</p>
        </section>
    )
}

// module exports
export default CircleGraph;