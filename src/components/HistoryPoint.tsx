
// import types
import {type FC, type ReactNode } from "react";

// import modules
import {useEffect, useRef, useState} from "react"


// TS types
type Props = {
    title:string,
    subtitle:string,
    className?:string,
    description:ReactNode | string
}

// main component
const HistoryPoint : FC<Props> = ({title, subtitle, description, className = "bg-red-800"}) => {

    const [visible, setVisible] = useState<boolean>(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        })

        observer.observe(ref.current);
    }, [])

    return(
        <section className={`flex-2 opacity-0 mt-10 ${visible ? "animate-fadeInUp" : ""}`}>
            <h3 className="text-2xl font-extrabold">{title}</h3>
            <section ref={ref} className={`h-2.5 ${className} my-5 rounded-2xl w-1/2`}></section>
            <h4 className="text-2xl font-extrabold text-zinc-600">{subtitle}</h4>
            <p className="font-bold text-zinc-600 mt-2">{description}</p>
        </section>
    )
}


// export components
export default HistoryPoint;