
// import types
import type { FC } from "react";

// import modules
import PageTitle from "../components/PageTitle";
import SEO from "../utils/SEO";
import CircleGraph from "../components/CircleGraph";

// import assets
import me from "../assets/me.jpg"
import CertificateSection from "../components/CertificateSection";



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
                    <h1 className="text-3xl font-extrabold">Certificates</h1>
                    <section className="h-2.5 bg-red-800 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <CertificateSection
                        title="JavaScript (Intermediate)"
                        subtitle="Achieved by passing JavaScript skill certification test"
                        earnedBy="HackerRank"
                        file="javascript_intermediate certificate.pdf"
                        learnedThings={[
                            "More advanced JS",
                            "JS objects",
                            "JS advanced functions"
                        ]}
                    />
                    <CertificateSection
                        title="Responsive Web Design"
                        subtitle="Achieved by making Web Design skill certification projects"
                        earnedBy="FreeCodeCamp"
                        file="css-certificate.pdf"
                        learnedThings={[
                            "CSS responsibility",
                            "CSS techniques",
                            "Good layout"
                        ]}
                    />
                    <CertificateSection
                        title="SQL (Intermediate)"
                        subtitle="Achieved by passing SQL skill certification test"
                        earnedBy="HackerRank"
                        file="sql_intermediate certificate.pdf"
                        learnedThings={[
                            "Simplifying queries",
                            "Advanced joins",
                        ]}
                    />
                </section>
                <section className="my-10">
                    <h1 className="text-3xl font-extrabold">Technical Skills</h1>
                    <section className="h-2.5 bg-cyan-500 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="my-10">
                    <h2 className="text-3xl font-extrabold">Basics</h2>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                    <CircleGraph value={95} title="HTML" mainColorClass="bg-orange-700" description="Mainly known" shadowColorClass="shadow-orange-700"/>
                    <CircleGraph value={90} title="CSS" mainColorClass="bg-sky-500" description="Mainly known" shadowColorClass="shadow-sky-500"/>
                    <CircleGraph value={80} title="JS(Plain)" mainColorClass="bg-yellow-500" description="Website Scripts basics" shadowColorClass="shadow-yellow-500"/>
                    <CircleGraph value={90} title="C#(Plain)" mainColorClass="bg-cyan-800" description="Mainly known" shadowColorClass="shadow-cyan-800"/>
                    <CircleGraph value={55} title="Java(Plain)" mainColorClass="bg-red-800" description="Mainly OOP" shadowColorClass="shadow-red-800"/>
                    <CircleGraph value={20} title="C++(Plain)" mainColorClass="bg-blue-900" description="Basics of Basics" shadowColorClass="shadow-blue-900"/>
                    <CircleGraph value={60} title="Python(Plain)" mainColorClass="bg-amber-500" description="Basics" shadowColorClass="shadow-amber-500"/>
                </section>
                <section className="my-10">
                    <h2 className="text-3xl font-extrabold">Databases</h2>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                    <CircleGraph value={70} title="MySQL" mainColorClass="bg-orange-800" description="Relational DB" shadowColorClass="shadow-orange-800"/>
                    <CircleGraph value={50} title="MongoDB" mainColorClass="bg-green-600" description="Non-Relational DB" shadowColorClass="shadow-green-600"/>
                </section>
                <section className="my-10">
                    <h2 className="text-3xl font-extrabold">Backend</h2>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                    <CircleGraph value={30} title="PHP" mainColorClass="bg-purple-800" description="Backend" shadowColorClass="shadow-purple-800"/>
                    <CircleGraph value={80} title="Node.js" mainColorClass="bg-lime-600" description="Backend" shadowColorClass="shadow-lime-600"/>
                    <CircleGraph value={75} title="Express.js" mainColorClass="bg-gray-500" description="Backend framework" shadowColorClass="shadow-gray-500"/>
                    <CircleGraph value={25} title="Flask" mainColorClass="bg-amber-500" description="Python framework" shadowColorClass="shadow-amber-500"/>
                </section>
                <section className="my-10">
                    <h2 className="text-3xl font-extrabold">Frontend</h2>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                    <CircleGraph value={70} title="React.js" mainColorClass="bg-cyan-500" description="JS framework" shadowColorClass="shadow-cyan-500"/>
                    <CircleGraph value={70} title="Tailwind" mainColorClass="bg-blue-700" description="Styles" shadowColorClass="shadow-blue-700"/>
                </section>
                <section className="my-10">
                    <h2 className="text-3xl font-extrabold">Utilities</h2>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                    <CircleGraph value={65} title="Git" mainColorClass="bg-pink-700" description="Version control" shadowColorClass="shadow-pink-700"/>
                </section>
            </section>
        </>
    )
}

// export components
export default KnowledgePage;