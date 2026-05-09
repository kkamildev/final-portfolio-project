
// import types
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import type { ReactNode } from "react"


// import modules

// import assets
import minesweeper1 from "../assets/projects/minesweeper1.png"
import pms1 from "../assets/projects/pms1.png"
import portfolio1 from "../assets/projects/portfolio1.png"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
// import theTunnelnet1 from "../assets/projects/theTunnelnet1.png"

// TS types

type ProjectSource = {
    href:string,
    icon:IconDefinition,
    text:string,
    buttonColor:string
}

type ImageDescription = {
    image:string,
    title:string,
    alt:string
}
type Description = {
    title:string,
    content:ReactNode,
    barColor:string
}
type TechnologyCard = {
    title:string,
    shadowColor:string,
    points:string[]
}

type Project = {
    name:string,
    simpleDescription:string,
    tags:string[],
    tagsColors:string[],
    image:string,
    completed:boolean,

    sources?:ProjectSource[],
    images?:ImageDescription[],
    text?:Description[],
    technologies?:TechnologyCard[]
}


// main component
const ProjectsData = () : Project[] => {
    return [
        {
            name:"Minesweeper",
            simpleDescription:"A basic game created using C++ and CMake",
            tags:[
                "C++",
                "Desktop Application",
                "Game"
            ],
            tagsColors:[
                "bg-blue-900",
                "bg-red-900",
                "bg-orange-800"
            ],
            image:minesweeper1,
            completed:true,

            sources:[
                {
                    text:"Github",
                    href:"https://github.com/kkamildev/minesweeper",
                    buttonColor:"bg-pink-800 hover:bg-pink-700",
                    icon:faGithub
                }
            ],
            technologies:[
                {
                    title:"C++",
                    shadowColor:"shadow-blue-900",
                    points:[
                        "General project language",
                        "Game logic",
                        "Game behaviour"
                    ]
                },
                {
                    title:"CMake",
                    shadowColor:"shadow-pink-600",
                    points:[
                        "Adding content to project",
                        "Compilation management"
                    ]
                },
                {
                    title:"Raylib",
                    shadowColor:"shadow-zinc-200",
                    points:[
                        "Displaying game window",
                        "User input"
                    ]
                }
            ],
            images:[
                {
                    image:minesweeper1,
                    alt:"Minesweeper gameplay",
                    title:"Gameplay screenshot"
                }
            ],
            text:[
                {
                    title:"Project assumptions",
                    barColor:"bg-red-800",
                    content:
                    <>
                        Project is a basic desktop game named "Minesweeper" - game about disarming mines.
                        This is a copy of orginal classic game so it don't have anything special
                    </>
                },
                {
                    title:"Origin of project",
                    barColor:"bg-green-800",
                    content:
                    <>
                        This project was a school project for computer science subject. Main goal was create a some project using a C++ language.
                        So I got an idea to make a simple game
                    </>
                },
                {
                    title:"What did I learn",
                    barColor:"bg-cyan-800",
                    content:
                    <>
                        Firstly I learn more C++ syntax and code, It was my first own project created using C++ language.
                        Also I learn basics of CMake, because I had to make environment for project creation
                    </>
                }
            ]
        },
        {
            name:"Property Management System",
            simpleDescription:"Polish database system to manage properties in enterprise",
            tags:[
                "Full-Stack",
                "Database System",
                "MySql",
                "React.js",
                "Node.js",
                "Tailwind"
            ],
            tagsColors:[
                "bg-cyan-700",
                "bg-green-700",
                "bg-orange-800",
                "bg-sky-600",
                "bg-lime-700",
                "bg-blue-900"
            ],
            image:pms1,
            completed:true
        },
        {
            name:"Portfolio Website",
            simpleDescription:"My presentation in website (This website)",
            tags:[
                "Website",
                "Front-End",
                "Tailwind",
                "React.js",
            ],
            tagsColors:[
                "bg-teal-500",
                "bg-cyan-600",
                "bg-blue-900",
                "bg-sky-600",
            ],
            image:portfolio1,
            completed:true
        },
        // {
        //     name:"The Tunnelnet",
        //     simpleDescription:"C# Roguelike game creating with monogame",
        //     tags:[
        //         "Game",
        //         "C#",
        //         "Monogame",
        //     ],
        //     tagsColors:[
        //         "bg-orange-800",
        //         "bg-cyan-500",
        //         "bg-orange-600",
        //     ],
        //     image:theTunnelnet1,
        //     completed:false
        // }
    ]
}

// export modules
export default ProjectsData;
export type {Project, ProjectSource}