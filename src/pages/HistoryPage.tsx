

// import types
import {type FC } from "react";

// import modules
import { useRef } from "react";
import PageTitle from "../components/PageTitle";
import SEO from "../utils/SEO";
import { useReactToPrint } from "react-to-print";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPrint } from "@fortawesome/free-solid-svg-icons";

// import assets

import me from "../assets/me.jpg"
import HistoryPoint from "../components/HistoryPoint";
import Resume from "../components/Resume";

// TS types
type Props = {

}

// main component
const HistoryPage : FC<Props> = ({}) => {

    const ResumeRef = useRef(null);

    const printResume = useReactToPrint({
        contentRef:ResumeRef,
        documentTitle:"Kamil Kijak Resume"
    });

    return(
        <>
            <SEO
                title="My work and learn history - KKamildev Portfolio"
                desc="Hi my name is Kamil Kijak, I am student of computer science. Let me tell my interesting learning and working path"
                url="https://aboutme.pixlesofte.com/history"
                img={me}
            />
            <section className="m-2 p-2 flex flex-col text-white">
                <PageTitle title="My history" subtitle="My interesting learning and working path"/>
                <section className="my-10">
                    <h1 className="text-3xl font-extrabold">My learning Path to greatness</h1>
                    <section className="h-2.5 bg-yellow-500 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="w-full flex mt-10">
                    <aside className="flex-1 flex flex-col items-center">
                        <section className="flex flex-col items-center relative">
                            <section className="h-16 w-16 rounded-full bg-yellow-500 relative top-2 flex justify-center items-center animate-scale">
                                <section className="h-8 w-8 rounded-full bg-zinc-900 relative"></section>
                            </section>
                            <section className="h-150.5 lg:h-100.5 w-5 bg-yellow-500"></section>
                            <section className="h-16 w-16 rounded-full bg-orange-500 relative bottom-2 flex justify-center items-center z-20 animate-scale">
                                <section className="h-8 w-8 rounded-full bg-zinc-900 relative"></section>
                            </section>
                        </section>
                        <section className="flex flex-col items-center relative bottom-4">
                            <section className="h-120.5 lg:h-80.5 w-5 bg-orange-500"></section>
                            {/* <section className="h-16 w-16 rounded-full bg-orange-500 relative bottom-2 flex justify-center items-center">
                                <section className="h-8 w-8 rounded-full bg-zinc-900 relative"></section>
                            </section> */}
                        </section>
                        {/* <section className="flex flex-col items-center relative bottom-7">
                            <section className="h-62.5 w-5 bg-yellow-500"></section>
                            <section className="h-16 w-16 rounded-full bg-yellow-500 relative bottom-2 flex justify-center items-center">
                                <section className="h-8 w-8 rounded-full bg-zinc-900 relative"></section>
                            </section>
                        </section> */}
                    </aside>
                    <aside className="flex-2 flex flex-col items-center">
                        <HistoryPoint
                            title="High School (Communication Technical School No. 25 in Kraków)"
                            subtitle="(September 2023 - expected graduation: April 2028)"
                            description={<>
                                In this High School I have learned many basics about IT, and it also have given me a path<br/> for a future software developer career.
                                I was feeling good in this chapter of my life; I have learned so much and also made cool projects. Technologies that I have learned: 
                                <span className="text-yellow-500"> MySQL, HTML, CSS, JS(Basics), React.js, PHP, Node.js, C#, Java(Basics)</span>
                            </>}
                            className="bg-yellow-500"
                        />
                        <HistoryPoint
                            title="Plans for college"
                            subtitle="(Expected start: October 2028)"
                            description={<>
                                I want to go to college in the <span className="text-orange-500">Computer Science field</span>; I want to develop my potential in IT and also<span className="text-orange-500"> in math (I love math)</span>. I guess I know so much but
                                I want to know more to be a specialist in this branch, to develop my greatness path. I hope everything will be okay, and I will be improving at college
                            </>}
                            className="bg-orange-500"
                        />
                    </aside>
                </section>
                <section className="my-10">
                    <h1 className="text-3xl font-extrabold">My working path to success</h1>
                    <section className="h-2.5 bg-green-700 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="w-full flex mt-10">
                    <aside className="flex-1 flex flex-col items-center">
                        <section className="flex flex-col items-center relative">
                            <section className="h-16 w-16 rounded-full bg-green-700 relative top-2 flex justify-center items-center animate-scale">
                                <section className="h-8 w-8 rounded-full bg-zinc-900 relative"></section>
                            </section>
                            <section className="h-150.5 lg:h-100.5 w-5 bg-green-700 "></section>
                            <section className="h-16 w-16 rounded-full bg-blue-800 relative bottom-2 flex justify-center items-center z-20 animate-scale">
                                <section className="h-8 w-8 rounded-full bg-zinc-900 relative"></section>
                            </section>
                        </section>
                        <section className="flex flex-col items-center relative bottom-4">
                            <section className="h-120.5 lg:h-80.5 w-5 bg-blue-800"></section>
                        </section>
                    </aside>
                    <aside className="flex-2 flex flex-col items-center">
                        <HistoryPoint
                            title="SKINVEST Specific-Task Contract"
                            subtitle="Making web full-stack property management system June - July 2025"
                            description={<>
                               It was my first form of job; I had to create a <span className="text-green-700">full-stack system</span> to replace the Excel database because this was messy, so the system was a good option to create <br />
                                I used <span className="text-green-700">Node.js with Express, React.js, MySQL as a database and Tailwind for styles</span> to create it. This job has taught me new technologies and how to deploy production versions
                            </>}
                            className="bg-green-700"
                        />
                        <HistoryPoint
                            title="Looking for intern"
                            subtitle="Looking for software developer intern"
                            description={<>
                               I have been looking for <span className="text-blue-800">software developer intern</span> to improve my skills and career and get important experience in this work field. Everyone must start from zero, so I really want to make the first step
                            </>}
                            className="bg-blue-800"
                        />
                    </aside>
                </section>
                <section className="my-10">
                    <h1 className="text-3xl font-extrabold">My Resume</h1>
                    <section className="h-2.5 bg-red-800 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="flex flex-col md:flex-row justify-start gap-10">  
                    <button onClick={printResume} className={`bg-red-800 p-2 hover:scale-105 text-white text-2xl font-bold cursor-pointer rounded-md transition-all duration-100 ease-in-out`}><FontAwesomeIcon icon={faPrint}/> Print Resume</button>
                </section>
                
            </section>
            {/* Component only prepared for print */}
            <section className="hidden">
                <section ref={ResumeRef}>
                    <Resume/>
                </section>
            </section>
        </>
    )
}

// export components
export default HistoryPage;