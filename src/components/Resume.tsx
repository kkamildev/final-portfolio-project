
// import types
import type { FC } from "react";

// import modules

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TS types
type Props = {

}


// main component
const Resume : FC<Props> = ({}) => {
    return (
        <main className="w-full m-5">
            <h1 className="my-3 text-3xl font-bold text-zinc-900">Kamil Kijak - Student of Software Development</h1>
            <p className="font-bold text-zinc-800">
                Student Software Development with hands-on experience in building full-stack web applications.
                Worked on real commercial projects involving database design, backend development, frontend integration and deployment.
                Focused on clean architecture, logical problem-solving and creating scalable solutions.
            </p>
            <section className="flex justify-start">
                <section className="flex flex-1 flex-col items-start">
                    <section className="mt-6 w-full">
                        <p className="font-bold text-zinc-900 self-start">Contact:</p>
                        <div className="bg-red-700 w-full min-h-0.75 mt-1"></div>
                        <section className="mt-3 gap-y-2 flex flex-col">
                            <section className="text-zinc-800 flex items-center gap-x-2 text-sm">
                                <FontAwesomeIcon icon={faLocationDot}/> Poland, Kraków
                            </section>
                            <section className="text-zinc-800 flex items-center gap-x-2 text-sm">
                                <FontAwesomeIcon icon={faEnvelope}/> kamil.kijak@pixlesofte.com
                            </section>
                            <section className="text-zinc-800 flex items-center gap-x-2 text-sm">
                                <FontAwesomeIcon icon={faLinkedin}/> https://linkedin.com/in/kamil-kijak-546676358
                            </section>
                            
                        </section>
                    </section>
                    <section className="mt-6 w-full">
                        <p className="font-bold text-zinc-900 self-start">Projects:</p>
                        <div className="bg-red-700 w-full min-h-0.75 mt-1"></div>
                        <section className="flex flex-col items-start">
                            <section className="mt-3 gap-y-2 flex flex-col">
                                <section className="text-zinc-800 flex items-center gap-x-2 text-sm">
                                    <FontAwesomeIcon icon={faAddressBook}/> https://aboutme.pixlesofte.com
                                </section>
                                <section className="text-zinc-800 flex items-center gap-x-2 text-sm">
                                    <FontAwesomeIcon icon={faGithub}/> https://github.com/kkamildev
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className="w-full mt-6">
                        <p className="font-bold text-zinc-900 self-start">Languages:</p>
                        <div className="bg-red-700 w-full min-h-0.75 mt-1"></div> 
                        <section className="flex flex-col items-start ml-5">
                            <ul className="mt-3 list-disc text-zinc-800 text-md">
                                <li><strong>Polish:</strong> Native</li>
                                <li><strong>English:</strong> B1 level</li>
                            </ul>
                        </section>
                    </section>
                    <section className="w-full mt-6">
                        <p className="font-bold text-zinc-900 self-start">Hard skills:</p>
                        <div className="bg-red-700 w-full h-0.75 mt-1"></div>
                        <section className="flex flex-col items-start ml-5">
                            <ul className="mt-3 list-disc text-zinc-800 text-sm">
                                <li>Web applications, websites creating</li>
                                <li>Database and server management</li>
                                <li>Version controlling and configurating server</li>
                            </ul>
                        </section>
                    </section>
                    <section className="w-full mt-6">
                        <p className="font-bold text-zinc-900 self-start">Soft skills:</p>
                        <div className="bg-red-700 w-full h-0.75 mt-1"></div>
                        <section className="flex flex-col items-start ml-5">
                            <ul className="mt-3 list-disc text-zinc-800 text-sm">
                                <li>Logical thinking</li>
                                <li>Creativity</li>
                                <li>Solving problems</li>
                            </ul>
                        </section>
                    </section>
                </section>
                <section className="flex-3 flex flex-col mt-3 ml-10 items-center">
                    <section className="flex flex-col mt-6 w-[80%]">
                        <h1 className="text-2xl font-bold">Education</h1>
                        <div className="bg-red-700 w-full h-0.75 mt-1"></div>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm font-bold">Technikum komunikacyjne nr 25, Kraków</p>
                                <p className="text-sm">2023 - (expected graduation June 2028)</p>
                                <p className="text-sm">Programming Technician</p>
                            </section>
                        </section>
                    </section>
                    <section className="flex flex-col mt-6 w-[80%]">
                        <h1 className="text-2xl font-bold">Technologies</h1>
                        <div className="bg-red-700 w-full h-0.75 mt-1"></div>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm"><span className="font-bold">Basis:</span> HTML, CSS, JavaScript</p>
                            </section>
                        </section>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm"><span className="font-bold">Backend:</span> Node.js, Express.js, PHP, Flask</p>
                            </section>
                        </section>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm"><span className="font-bold">Frontend:</span> React.js</p>
                            </section>
                        </section>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm"><span className="font-bold">Database:</span> MySQL, mongoDB</p>
                            </section>
                        </section>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm"><span className="font-bold">Frameworks:</span> Tailwind</p>
                            </section>
                        </section>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm"><span className="font-bold">Languages:</span> C#, Python</p>
                            </section>
                        </section>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm"><span className="font-bold">Tools:</span> VScode, Pycharm, MySQL Workbench</p>
                            </section>
                        </section>
                    </section>
                    <section className="flex flex-col mt-6 w-[80%]">
                        <h1 className="text-2xl font-bold">Experience</h1>
                        <div className="bg-red-700 w-full h-0.75 mt-1"></div>
                        <section className="mt-4 flex gap-x-5 items-center">
                            <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full"></div>
                            <section className="flex flex-col">
                                <p className="text-sm font-bold">SK Invest, Koszyce</p>
                                <p className="text-sm font-bold">Project: Internal real-estate management system</p>
                                <p className="text-sm">July 2025 - September 2025 (2 months)</p>
                                <ul className="mt-2">
                                    <li className="text-sm"><span className="font-bold">-</span> Designed DBMS using MySQL</li>
                                    <li className="text-sm"><span className="font-bold">-</span> Created Node.js server with Express.js</li>
                                    <li className="text-sm"><span className="font-bold">-</span> Created React app and integrated it with backend</li>
                                    <li className="text-sm"><span className="font-bold">-</span> Deployed application on local hosting server</li>
                                </ul>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </main>
    )
}

// export components
export default Resume;