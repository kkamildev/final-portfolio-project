
// import types
import { type FC } from "react";

// import modules
import { useRef, useState, useEffect } from "react";


// TS types
type Props = {
    title:string,
    subtitle:string,
    image:string
}

// main component
const LanguageSection : FC<Props> = ({title, subtitle, image}) => {

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
            <section className="flex justify-center mb-10">
                <img src={image} alt="Flag" className="w-52.5 h-31" />
            </section>
            <h2 ref={ref} className="font-extrabold text-center text-4xl my-5">{title}</h2>
            <p className="font-bold text-zinc-600 my-5 text-center text-2xl">{subtitle}</p>
        </section>
    )
}

// export components
export default LanguageSection;