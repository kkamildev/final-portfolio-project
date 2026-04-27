

// import types
import type { FC } from "react";

// import modules



// TS types
type Props = {
    title:string,
    subtitle:string
}

// main component
const PageTitle : FC<Props> = ({title, subtitle}) => {
    return (
        <section className="mb-10">
            <h1 className="text-white font-bold text-5xl">{title}</h1>
            <div className="h-2.5 w-full bg-red-800 my-4 rounded-md"></div>
            <h2 className="mb-10 mt-2 text-zinc-700 font-bold text-4xl italic">{subtitle}</h2>
        </section>
    )
}

// export components
export default PageTitle;