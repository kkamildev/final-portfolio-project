
// import types
import type { FC } from "react";

// import modules
import PageTitle from "../components/PageTitle";
import SEO from "../utils/SEO";
import CircleGraph from "../components/CircleGraph";

// import assets
import me from "../assets/me.jpg"



// TS types
type Props = {

}

// main component
const KnowledgePage : FC<Props> = ({}) => {
    return (
        <>
            <SEO
                title="Knowledge - KKamildev Portfolio"
                desc="Hi my name is Kamil Kijak, I am student of computer science. My knowledge, my skills, courses and certificates - find out"
                url="https://aboutme.pixlesofte.com/knowledge"
                img={me}
            />
            <section className="m-2 p-2 flex flex-col text-white">
                <PageTitle title="My knowledge" subtitle="My knowledge, skills, courses and certificates - find out"/>
                <section className="my-10">
                    <h1 className="text-3xl font-extrabold">Technical Skills</h1>
                    <section className="h-2.5 bg-cyan-500 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="flex">
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                    <CircleGraph value={95} title="HTML" mainColorClass="bg-orange-700" description="Mainly known" shadowColorClass="shadow-orange-700"/>
                    <CircleGraph value={85} title="CSS" mainColorClass="bg-sky-500" description="Mainly known" shadowColorClass="shadow-sky-500"/>
                </section>
            </section>
        </>
    )
}

// export components
export default KnowledgePage;