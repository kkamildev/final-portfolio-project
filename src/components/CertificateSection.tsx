
// import types
import type { FC } from "react";

// import modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";


// TS types
type Props = {
    title:string,
    earnedBy:string,
    subtitle?:string,
    learnedThings:string[],
    file:string
}

// main component
const CertificateSection : FC<Props> = ({title, subtitle = "", earnedBy, learnedThings, file}) => {
    return (
        <section className="p-2 rounded-xl bg-zinc-900 shadow-md shadow-red-800">
            <h2 className="font-bold text-center text-2xl">{title}</h2>
            <h3 className="font-bold text-center text-xl text-red-800 mt-1">{earnedBy}</h3>
            <p className="font-bold text-zinc-600 my-5 text-center">{subtitle}</p>
            <h4 className="font-bold  my-5 text-center text-xl">What did I learn?</h4>
            <section className="flex justify-center">
                <section className="flex flex-col justify-start items-start mb-5 gap-y-2">
                    {learnedThings.map((obj, index) => <p className="font-bold text-zinc-600" key={index}><FontAwesomeIcon className="text-green-600 mx-3 scale-110" icon={faCircleCheck}/>{obj}</p>)}
                </section>
            </section>
            <section className="flex justify-center">
                <a href={`./certificates/${file}`} className="m-2 p-2 bg-red-900 hover:bg-red-800 hover:scale-105 text-white font-bold cursor-pointer rounded-md transition-all duration-100 ease-in-out">
                    View certificate
                </a>
            </section>
        </section>
    )
}

// export components
export default CertificateSection;