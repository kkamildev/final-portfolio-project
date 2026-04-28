

// import types
import {type FC } from "react";

// import modules
import {useEffect, useRef} from "react"
import anime from "animejs"


// TS types
type Props = {
    className?:string,
    animationDuration?:number,
    borders?:[string, string]
}

// main component
const AnimatedBar : FC<Props> = ({className = "bg-red-800", animationDuration = 2000, borders = ["0%", "100%"]}) => {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        anime({
            targets: ref.current,
            width: borders,
            duration: animationDuration,
            easing: "easeInOutSine",
            direction: "alternate",
            loop: true
        });
    }, []);
    return(
        <section className="flex w-full justify-center">
            <section className={`h-2.5 ${className} my-5 rounded-2xl`} ref={ref}>

            </section>
        </section>
    )
}

// export components
export default AnimatedBar;