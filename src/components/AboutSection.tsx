
// import types
import {type FC, type ReactNode } from "react";

// import modules
import {useEffect, useRef, useState} from "react"


// TS types
type Props = {
    title:ReactNode | string,
    description:ReactNode | string,
    margin?:boolean,
    reversedFlex?:boolean,
    className?:string,
    images?:string[],
    alts?:string[]
}

// main component
const AboutSection : FC<Props> = ({title, description, margin = false, reversedFlex = false, className = "bg-red-800", images = [], alts = []}) => {

    const [visible, setVisible] = useState<boolean>(false);

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        })

        if (ref.current) {
            observer.observe(ref.current);
        }
    }, [])

    return(
        <section className={`flex flex-col ${reversedFlex ? "lg:flex-row-reverse" : "lg:flex-row"} ${visible ? "animate-fadeInUp" : ""} opacity-0 gap-x-5 gap-y-5 items-center my-30`}>
            {margin && <section className="flex-1"></section>}
            <section className="flex-2">
                <h3 className="text-2xl font-extrabold">{title}</h3>
                <section ref={ref} className={`h-2.5 ${className} my-5 rounded-2xl w-1/2`}></section>
                <p className="font-bold text-zinc-600 mt-2">{description}</p>
            </section>
            <section className="block xl:flex">
                {
                    images.map((obj, index) => <img key={index} src={obj} alt={alts[index] ?? "Photo"} className="rounded-2xl h-62.5 w-62.5" loading="lazy"/>)
                }
            </section>
        </section>
    )
}


// export components
export default AboutSection;