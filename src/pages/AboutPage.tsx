

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
                    <section className="flex flex-col lg:flex-row gap-x-5 gap-y-5 items-center mb-30">
                        <section className="flex-2">
                            <h3 className="text-2xl font-extrabold">My name is Kamil Kijak | <span className="text-red-800">Kkamildev</span></h3>
                            <section className="h-2.5 bg-red-800 my-5 rounded-2xl w-1/2"></section>
                            <p className="font-bold text-zinc-600 mt-2">I am a computer science student from <span className="text-red-800">Poland near Kraków city</span>. I love work with computers and general IT sector. I am passionate about these with peaceful and quiet ambience around me. <span className="text-red-800">Kkamildev</span> is my nickname used for example in <span className="text-purple-800">Github</span></p>
                        </section>
                        <section className="block xl:flex">
                            <img src={me} alt="Photo of me" className="rounded-2xl h-62.5 w-62.5" loading="lazy"/>
                            <img src={polandFlag} alt="Poland flag" className="rounded-2xl h-62.5 w-62.5" loading="lazy"/>
                        </section>
                    </section>
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
                    <section className="flex flex-col lg:flex-row-reverse gap-x-5 gap-y-5 items-center my-30">
                        <section className="flex-2">
                            <h3 className="text-2xl font-extrabold">Let me talk about my <span className="text-red-800">Beginnings</span> in IT</h3>
                            <section className="h-2.5 bg-blue-800 my-5 rounded-2xl w-1/2"></section>
                            <p className="font-bold text-zinc-600 mt-2">So my beginnings are interesting they are have roots in childhood. First programming language which I have started is <span className="text-yellow-500">Python</span>, but also before I very liked commands in games or primitives like Scratch. I created few python basic games, but main progress was when I have applicated to <span className="text-red-800">technican high-school</span>. I have introduced to programming <span className="text-purple-700">websites, apps and server utilities</span></p>
                        </section>
                        <section className="block xl:flex">
                            <img src={it} alt="IT technology photo" className="rounded-2xl h-62.5 w-62.5" loading="lazy"/>
                            <img src={server} alt="Server photo" className="rounded-2xl h-62.5 w-62.5" loading="lazy"/>
                        </section>
                    </section>
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
                    <section className="flex flex-col lg:flex-row-reverse gap-x-5 gap-y-5 items-center my-30">
                        <section className="flex-1"></section>
                        <section className="flex-2">
                            <h3 className="text-2xl font-extrabold">So what is my current <span className="text-red-800">situation</span>?</h3>
                            <section className="h-2.5 bg-yellow-500 my-5 rounded-2xl w-1/2"></section>
                            <p className="font-bold text-zinc-600 mt-2">I have huge contact with a lot of <span className="text-red-800">IT technologies</span> and also many of them know on good, also I practice new and improve my already known technologies. I also like to build <span className="text-green-700">projects</span> to show my skills and also test it to new technology environment. Now I am looking for <span className="text-yellow-500">intern or other kind of collaboration</span> to take a huge IT step</p>
                        </section>
                        <section className="block xl:flex">
                            <img src={questionMark} alt="question mark" className="rounded-2xl h-62.5 w-62.5" loading="lazy"/>
                            <img src={collaboration} alt="collaboration icon" className="rounded-2xl h-62.5 w-62.5" loading="lazy"/>
                        </section>
                    </section>
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
                    <section className="flex flex-col lg:flex-row gap-x-5 gap-y-5 items-center my-30">
                        <section className="flex-2">
                            <h3 className="text-2xl font-extrabold">Finally, <span className="text-red-800">my future</span> path in IT</h3>
                            <section className="h-2.5 bg-green-700 my-5 rounded-2xl w-1/2"></section>
                            <p className="font-bold text-zinc-600 mt-2">I want in become a <span className="text-red-800">software-developer specialist</span>, collect more experience about IT brand and work to improve myself, build very good <span className="text-green-700">IT projects even prepared for production and deployment</span> to world as fully working software or service. I have many plans to become <span className="text-yellow-500">my IT path</span> very optimistic and good for me</p>
                        </section>
                        <section className="block xl:flex">
                            <img src={bullseye} alt="bullseye" className="rounded-2xl h-62.5 w-62.5" loading="lazy"/>
                            <img src={careerPath} alt="career path" className="rounded-2xl h-62.5 w-62.5" loading="lazy"/>
                        </section>
                    </section>
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

