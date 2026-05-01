

// import types
import {type FC } from "react";

// import modules
import PageTitle from "../components/PageTitle";
import AnimatedBar from "../components/AnimatedBar";
import SEO from "../utils/SEO";

// import assets
import bullseye from "../assets/bullseye.png"
import questionMark from "../assets/questionMark.png"
import it from "../assets/it.png"
import me from "../assets/me.jpg"
import polandFlag from "../assets/polandFlag.webp"
import server from "../assets/server.png"
import careerPath from "../assets/careerPath.png"
import collaboration from "../assets/collaboration.png"
import AboutSection from "../components/AboutSection";

// TS types
type Props = {

}


// main component
const AboutPage : FC<Props> = ({}) => {

    return (
        <>
            <SEO
                title="About Me - KKamildev Portfolio"
                desc="Hi my name is Kamil Kijak, I am student of computer science. So let me introduce myself"
                url="https://aboutme.pixlesofte.com"
                img={me}
            />
            <section className="m-2 p-2 flex flex-col">
                <PageTitle title="About Me" subtitle="So let me introduce myself"/>
                <ul className="text-white">
                    <AboutSection
                        title={<>My name is Kamil Kijak | <span className="text-red-800">Kkamildev</span></>}
                        description={<>I am a computer science student from <span className="text-red-800">Poland near Kraków city</span>. I love work with computers and general IT sector. I am passionate about these with peaceful and quiet ambience around me. <span className="text-red-800">Kkamildev</span> is my nickname used for example in <span className="text-purple-800">Github</span></>}
                        images={[me, polandFlag]}
                        alts={["photo of me", "Poland flag"]}
                        className="bg-red-800"
                    />
                    <section className="my-10">
                        <AnimatedBar
                            animationDuration={Math.random() * 1000 + 1000}
                            className="bg-red-900 m-0!"
                            borders={["20%", "60%"]}
                        />
                        <AnimatedBar
                            animationDuration={Math.random() * 1000 + 1000}
                            className="bg-red-800 m-0!"
                            borders={["20%", "60%"]}
                        />
                        <AnimatedBar
                            animationDuration={Math.random() * 1000 + 1000}
                            className="bg-red-700 m-0!"
                            borders={["20%", "60%"]}
                        />
                    </section>
                    <AboutSection
                        title={<>Let me talk about my <span className="text-red-800">Beginnings</span> in IT</>}
                        description={<>So my beginnings are interesting they are have roots in childhood. First programming language which I have started is <span className="text-yellow-500">Python</span>, but also before I very liked commands in games or primitives like Scratch. I created few python basic games, but main progress was when I have applicated to <span className="text-red-800">technican high-school</span>. I have introduced to programming <span className="text-purple-700">websites, apps and server utilities</span></>}
                        reversedFlex
                        images={[it, server]}
                        alts={["IT technology icon", "server icon"]}
                        className="bg-blue-800"
                    />
                    <section className="my-10">
                        <AnimatedBar
                            animationDuration={Math.random() * 1000 + 1000}
                            className="bg-red-900 m-0!"
                            borders={["20%", "60%"]}
                        />
                        <AnimatedBar
                            animationDuration={Math.random() * 1000 + 1000}
                            className="bg-red-800 m-0! "
                            borders={["20%", "60%"]}
                        />
                        <AnimatedBar
                            animationDuration={Math.random() * 1000 + 1000}
                            className="bg-red-700 m-0! "
                            borders={["20%", "60%"]}
                        />
                    </section>
                    <AboutSection
                        title={<>So what is my current <span className="text-red-800">situation</span>?</>}
                        description={<>I have huge contact with a lot of <span className="text-red-800">IT technologies</span> and also many of them know on good, also I practice new and improve my already known technologies. I also like to build <span className="text-green-700">projects</span> to show my skills and also test it to new technology environment. Now I am looking for <span className="text-yellow-500">intern or other kind of collaboration</span> to take a huge IT step</>}
                        margin
                        reversedFlex
                        images={[questionMark, collaboration]}
                        alts={["question mark", "collaboration icon"]}
                        className="bg-yellow-500"
                    />
                    <section className="my-10">
                        <AnimatedBar
                            animationDuration={Math.random() * 1000 + 1000}
                            className="bg-red-900 m-0! "
                            borders={["20%", "60%"]}
                        />
                        <AnimatedBar
                            animationDuration={Math.random() * 1000 + 1000}
                            className="bg-red-800 m-0! "
                            borders={["20%", "60%"]}
                        />
                        <AnimatedBar
                            animationDuration={Math.random() * 1000 + 1000}
                            className="bg-red-700 m-0! "
                            borders={["20%", "60%"]}
                        />
                    </section>
                    <AboutSection
                        title={<>Finally, <span className="text-red-800">my future</span> path in IT</>}
                        description={<>I want in become a <span className="text-red-800">software-developer specialist</span>, collect more experience about IT brand and work to improve myself, build very good <span className="text-green-700">IT projects even prepared for production and deployment</span> to world as fully working software or service. I have many plans to become <span className="text-yellow-500">my IT path</span> very optimistic and good for me</>}
                        images={[bullseye, careerPath]}
                        alts={["bullseye icon", "career path icon"]}
                        className="bg-green-700"
                    />
                    <section className="my-10">
                        <AnimatedBar
                            animationDuration={Math.random() * 1000 + 1000}
                            className="bg-red-900 m-0! "
                            borders={["20%", "60%"]}
                        />
                        <AnimatedBar
                            animationDuration={Math.random() * 1000 + 1000}
                            className="bg-red-800 m-0! "
                            borders={["20%", "60%"]}
                        />
                        <AnimatedBar
                            animationDuration={Math.random() * 1000 + 1000}
                            className="bg-red-700 m-0! "
                            borders={["20%", "60%"]}
                        />
                    </section>
                </ul>
            </section>
        </>
    )
}

// export components
export default AboutPage;

