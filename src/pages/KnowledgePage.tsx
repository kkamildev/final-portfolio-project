
// import types
import type { FC } from "react";

// import modules
import PageTitle from "../components/PageTitle";
import SEO from "../utils/SEO";
import ProgrammingSection from "../components/ProgrammingSection";
import CertificateSection from "../components/CertificateSection";
import SoftSkillSection from "../components/SoftSkillSection";
import LanguageSection from "../components/LanguageSection";

// import assets
import me from "../assets/me.jpg"
import PolandFlag from "../assets/polandFlag.png"
import UsaFlag from "../assets/usaFlag.webp"



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
                    <h1 className="text-3xl font-extrabold">Languages</h1>
                    <section className="h-2.5 bg-red-800 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <LanguageSection
                        title="Polish"
                        subtitle="Native Speaker"
                        image={PolandFlag}
                    />
                    <LanguageSection
                        title="English"
                        subtitle="B1-level"
                        image={UsaFlag}
                    />
                </section>
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
                    <section className="h-2.5 bg-red-800 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="my-10">
                    <h2 className="text-3xl font-extrabold">Basics</h2>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                    <ProgrammingSection value={95} title="HTML" mainColorClass="bg-orange-700" shadowColorClass="shadow-orange-700"
                        examples={[
                            "Layout", "Specific tags"
                        ]}
                    />
                    <ProgrammingSection value={90} title="CSS" mainColorClass="bg-sky-500" shadowColorClass="shadow-sky-500"
                        examples={[
                            "Good UX", "Responsibility", "Clear-Website design"
                        ]}
                    />
                    <ProgrammingSection value={80} title="JS(Plain)" mainColorClass="bg-yellow-500" shadowColorClass="shadow-yellow-500"
                        examples={["ES6", "Async/await", "Sending requests"]}
                    />
                    <ProgrammingSection value={90} title="C#(Plain)" mainColorClass="bg-cyan-800" shadowColorClass="shadow-cyan-800"
                        examples={["OOP", "Async/await", "TCP/UDP"]}
                    />
                    <ProgrammingSection value={55} title="Java(Plain)" mainColorClass="bg-red-800" shadowColorClass="shadow-red-800"
                        examples={["OOP", "Reading files"]}
                    />
                    <ProgrammingSection value={20} title="C++(Plain)" mainColorClass="bg-blue-900" shadowColorClass="shadow-blue-900"
                        examples={["I/O operations", "File operations"]}
                    />
                    <ProgrammingSection value={60} title="Python(Plain)" mainColorClass="bg-amber-500" shadowColorClass="shadow-amber-500"
                        examples={["OOP", "Simple requests", "Simple desktop apps"]}
                    />
                </section>
                <section className="my-10">
                    <h2 className="text-3xl font-extrabold">Databases</h2>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                    <ProgrammingSection value={70} title="MySQL" mainColorClass="bg-orange-800" shadowColorClass="shadow-orange-800"
                        examples={["Joins", "Aggregate functions", "Users management"]}
                    />
                    <ProgrammingSection value={50} title="MongoDB" mainColorClass="bg-green-600" shadowColorClass="shadow-green-600"
                        examples={["Data management", "Some mongosh code"]}
                    />
                </section>
                <section className="my-10">
                    <h2 className="text-3xl font-extrabold">Backend</h2>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                    <ProgrammingSection value={30} title="PHP" mainColorClass="bg-purple-800" shadowColorClass="shadow-purple-800"
                        examples={["SQL connection", "Sessions/Cookies", "Simple language functions", "Request decontamination"]}
                    />
                    <ProgrammingSection value={80} title="Node.js" mainColorClass="bg-lime-600" shadowColorClass="shadow-lime-600"
                        examples={["HTTP server", "Dotenv", "WebSocket", "Sessions"]}
                    />
                    <ProgrammingSection value={75} title="Express.js" mainColorClass="bg-gray-500" shadowColorClass="shadow-gray-500"
                        examples={["Routing", "Handling errors", "JWT auth"]}
                    />
                    <ProgrammingSection value={25} title="Flask" mainColorClass="bg-amber-500" shadowColorClass="shadow-amber-500"
                        examples={["HTML templates", "MySQL schemas", "API creating"]}
                    />
                </section>
                <section className="my-10">
                    <h2 className="text-3xl font-extrabold">Frontend</h2>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                    <ProgrammingSection value={70} title="React.js" mainColorClass="bg-cyan-500" shadowColorClass="shadow-cyan-500"
                        examples={["React-router-dom", "Zustand", "Axios"]}
                    />
                    <ProgrammingSection value={70} title="Tailwind" mainColorClass="bg-blue-700" shadowColorClass="shadow-blue-700" 
                        examples={["Animations", "Creating own classes", "Classes knowledge"]}
                    />
                </section>
                <section className="my-10">
                    <h2 className="text-3xl font-extrabold">Utilities</h2>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                    <ProgrammingSection value={65} title="Git" mainColorClass="bg-pink-700" shadowColorClass="shadow-pink-700"
                        examples={["Commit/push", "Branches", "Merge"]}
                    />
                </section>
                <section className="my-10">
                    <h1 className="text-3xl font-extrabold">Soft-skills</h1>
                    <section className="h-2.5 bg-red-800 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                    <SoftSkillSection
                        title="Teamwork"
                        include={[
                            "Management in team",
                            "Making together decisions",
                            "Task assignation"
                        ]}
                    />
                    <SoftSkillSection
                        title="Planning"
                        include={[
                            "Planning in team",
                            "Planning work",
                            "Making technical plans"
                        ]}
                    />
                    <SoftSkillSection
                        title="Creativity"
                        include={[
                            "Creative designs",
                            "Creating creative content",
                        ]}
                    />
                    <SoftSkillSection
                        title="Solving problems"
                        include={[
                            "Hard coding problems",
                            "Technical problems",
                            "UX problems",
                            "Logic problems",
                        ]}
                    />
                    <SoftSkillSection
                        title="Critical thinking"
                        include={[
                            "Improvisation",
                            "Creating ideas",
                            "Thinking about solving ideas",
                        ]}
                    />
                    <SoftSkillSection
                        title="Productivity"
                        include={[
                            "Time management",
                            "Work planning",
                            "Setting good goals",
                        ]}
                    />
                </section>
            </section>
        </>
    )
}

// export components
export default KnowledgePage;