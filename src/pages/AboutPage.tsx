

// import types
import type { FC } from "react";

// import modules
import {Helmet} from "react-helmet-async"
import PageTitle from "../components/PageTitle";


// TS types
type Props = {

}

// main component
const AboutPage : FC<Props> = ({}) => {
    return (
        <>
            <Helmet>
                <title>About Me - KKamildev</title>
            </Helmet>
            <section className="m-2 p-2 flex flex-col">
                <PageTitle title="About Me" subtitle="So let me introduce myself"/>
                <ul className="text-white">
                    <section className="flex flex-col lg:flex-row gap-x-5 gap-y-5 items-center">
                        <section className="flex-2">
                            <h1 className="text-2xl font-extrabold">My name is Kamil Kijak | <span className="text-red-800">Kkamildev</span></h1>
                            <p className="font-bold text-zinc-600 mt-2">I am a computer science student from <span className="text-red-800">Poland near Kraków city</span>. I love work with computers and general IT sector. I am passionate about these with peaceful and quiet ambience around me</p>
                        </section>
                        <img src="" alt="My photo" className="flex-1 shadow-md shadow-white/40 rounded-2xl h-62.5 w-full lg:w-auto"/>
                    </section>
                    <section className="flex flex-col lg:flex-row-reverse gap-x-5 gap-y-5 items-center mt-30">
                        <section className="flex-2">
                            <h1 className="text-2xl font-extrabold">Let me talk about my <span className="text-red-800">Beginnings</span> in IT</h1>
                            <p className="font-bold text-zinc-600 mt-2">So my beginnings are interesting. First programming language which I have started is <span className="text-yellow-500">Python</span>, but also before I very liked commands in games or primitives like Scratch. I created few python basic games, but main progress was when I have applicated to <span className="text-red-800">technican high-school</span>. I have introduced to programming <span className="text-purple-700">websites, apps and server utilities</span></p>
                        </section>
                        <img src="" alt="photo" className="flex-1 shadow-md shadow-white/40 rounded-2xl h-62.5 w-full lg:w-auto"/>
                    </section>
                    <section className="flex flex-col lg:flex-row-reverse gap-x-5 gap-y-5 items-center mt-30">
                        <section className="flex-2">
                            <h1 className="text-2xl font-extrabold">So what is my current <span className="text-red-800">situation</span></h1>
                            <p className="font-bold text-zinc-600 mt-2">I have huge contact with a lot of <span className="text-red-800">IT technologies</span> and also many of them know on good, also I practice new and improve my already known technologies. I also like to build <span className="text-green-700">projects</span> to show my skills and also test it to new technology environment. Now I am looking for <span className="text-yellow-500">intern or other kind of collaboration</span> to take a huge IT step</p>
                        </section>
                        <img src="" alt="photo" className="flex-1 shadow-md shadow-white/40 rounded-2xl h-62.5 w-full lg:w-auto"/>
                    </section>
                    <section className="flex flex-col lg:flex-row gap-x-5 gap-y-5 items-center mt-30">
                        <section className="flex-1">
                            <h1 className="text-2xl font-extrabold">Finally, <span className="text-red-800">my future</span> path to IT</h1>
                            <p className="font-bold text-zinc-600 mt-2">I want in become a <span className="text-red-800">software-developer specialist</span>, collect more experience about IT brand and work to improve myself, build very good <span className="text-green-700">IT projects even prepared for production and deployment</span> to world as fully working software or service. I have many plans to become <span className="text-yellow-500">my IT path</span> very optimistic and good for me</p>
                        </section>
                        <img src="" alt="photo" className="flex-1 shadow-md shadow-white/40 rounded-2xl h-62.5 w-full lg:w-auto"/>
                    </section>
                </ul>
            </section>
        </>
    )
}

// export components
export default AboutPage;