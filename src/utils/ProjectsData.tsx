
// import types
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"


// import modules

// import assets
import minesweeper1 from "../assets/projects/minesweeper1.png"
import pms1 from "../assets/projects/pms1.png"
import portfolio1 from "../assets/projects/portfolio1.png"
import theTunnelnet1 from "../assets/projects/theTunnelnet1.png"

// TS types

type ProjectSource = {
    href:string,
    icon:IconDefinition,
    text:string
}

type Project = {
    name:string,
    simpleDescription:string,
    tags:string[],
    tagsColors:string[],
    image:string,
    completed:boolean,

    sources?:ProjectSource[]
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
            completed:true
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
        {
            name:"The Tunnelnet",
            simpleDescription:"C# Roguelike game creating with monogame",
            tags:[
                "Game",
                "C#",
                "Monogame",
            ],
            tagsColors:[
                "bg-orange-800",
                "bg-cyan-500",
                "bg-orange-600",
            ],
            image:theTunnelnet1,
            completed:false
        }
    ]
}

// export modules
export default ProjectsData;
export type {Project, ProjectSource}