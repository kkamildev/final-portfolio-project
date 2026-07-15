
// import types
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import type { ReactNode } from "react"


// import modules
import { faGithub } from "@fortawesome/free-brands-svg-icons"

// import assets
import minesweeper1 from "../assets/projects/minesweeper1.png"
import pms1 from "../assets/projects/pms1.png"
import pms2 from "../assets/projects/pms2.png"
import pms3 from "../assets/projects/pms3.png"
import portfolio1 from "../assets/projects/portfolio1.png"
import ecommerce1 from "../assets/projects/e-commerce1.png"

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
                        This is a copy of the orginal classic game, so it doesn't have anything special
                    </>
                },
                {
                    title:"Origin of project",
                    barColor:"bg-green-800",
                    content:
                    <>
                        This project was a school project for the computer science subject. The Main goal was to create some project using the C++ language.
                        So I got an idea to make a simple game
                    </>
                },
                {
                    title:"What did I learn",
                    barColor:"bg-cyan-800",
                    content:
                    <>
                        Firstly, I learned more C++ syntax and code. It was my first project created using the C++ language.
                        Also, I learned the basics of CMake because I had to make an environment for project creation
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
            completed:true,

            sources:[
                {
                    text:"Github",
                    href:"https://github.com/kkamildev/pms-v2",
                    buttonColor:"bg-pink-800 hover:bg-pink-700",
                    icon:faGithub
                }
            ],
            technologies:[
                {
                    title:"React.js",
                    shadowColor:"shadow-sky-500",
                    points:[
                        "Front-end",
                        "UI looking",
                        "UI behaviour"
                    ]
                },
                {
                    title:"Zustand",
                    shadowColor:"shadow-stone-800",
                    points:[
                        "State managament",
                        "Creating stores"
                    ]
                },
                {
                    title:"Tailwind",
                    shadowColor:"shadow-blue-800",
                    points:[
                        "Creating styles",
                        "Creating animations",
                        "Website formatting"
                    ]
                },
                {
                    title:"Node.js",
                    shadowColor:"shadow-lime-600",
                    points:[
                        "Back-end",
                        "Server logic",
                        "Requests to database"
                    ]
                },
                {
                    title:"Express.js",
                    shadowColor:"shadow-zinc-400",
                    points:[
                        "API creating",
                        "Middlewares",
                        "Creating request/response system"
                    ]
                },
                {
                    title:"MySql",
                    shadowColor:"shadow-orange-600",
                    points:[
                        "Database creating",
                        "Database general language",
                    ]
                },
                {
                    title:"Vite",
                    shadowColor:"shadow-purple-800",
                    points:[
                        "Project management",
                        "Project setup",
                    ]
                }
            ],
            text:[
                {
                    title:"Project assumptions",
                    barColor:"bg-red-800",
                    content:
                    <>
                       Full-stack project as a property management system, which includes data management, user management, and adding properties to lands. The Project had to be in
                       Polish language
                    </>
                },
                {
                    title:"Origin of project",
                    barColor:"bg-green-800",
                    content:
                    <>
                        This is a project that I have to make for the properties enterprise. This system is hosted a local enterprise server
                    </>
                },
                {
                    title:"Creating",
                    barColor:"bg-purple-500",
                    content:
                    <>
                        This project was a good challenge of web development skills; I also had limited time to complete it. Also, new assumptions were told to me,
                        so I had to rebuild the project again, create new sections, or do other things
                    </>
                },
                {
                    title:"What did I learn",
                    barColor:"bg-cyan-800",
                    content:
                    <>
                        This project taught me mainly how React works, advanced state management, and the backend, creating a better structure of the project. I learned also the basics of
                        project deployment on real production
                    </>
                }
            ],
            images:[
                {
                    title:"Property editor",
                    alt:"Property editor screenshot",
                    image:pms2
                },
                {
                    title:"Properties search",
                    alt:"Properties search screenshot",
                    image:pms3
                },
            ]
        },
        {
            name:"Portfolio Website",
            simpleDescription:"My presentation in website (This website)",
            tags:[
                "Website",
                "Front-End",
                "Tailwind",
                "React.js",
                "TypeScript"
            ],
            
            tagsColors:[
                "bg-teal-500",
                "bg-cyan-600",
                "bg-blue-900",
                "bg-sky-600",
                "bg-blue-800"
            ],
            image:portfolio1,
            completed:true,

            sources:[
                {
                    text:"Github",
                    href:"https://github.com/kkamildev/final-portfolio-project",
                    buttonColor:"bg-pink-800 hover:bg-pink-700",
                    icon:faGithub
                }
            ],
            technologies:[
                {
                    title:"React",
                    shadowColor:"shadow-sky-500",
                    points:[
                        "Front-end",
                        "Website looking",
                        "Website behaviour"
                    ]
                },
                {
                    title:"TypeScript",
                    shadowColor:"shadow-blue-700",
                    points:[
                        "Project general language",
                        "Adding types"
                    ]
                },
                {
                    title:"Tailwind",
                    shadowColor:"shadow-blue-800",
                    points:[
                        "Creating styles",
                        "Creating animations",
                        "Website formatting"
                    ]
                },
                {
                    title:"Vite",
                    shadowColor:"shadow-purple-800",
                    points:[
                        "Project management",
                        "Project setup",
                    ]
                }
            ],
            text:[
                {
                    title:"Project assumptions",
                    barColor:"bg-red-800",
                    content:
                    <>
                        I created this project using the front-end framework (React). This website is my portfolio, which I will add my projects, work, skills, and certificates to
                    </>
                },
                {
                    title:"Origin of project",
                    barColor:"bg-green-800",
                    content:
                    <>
                        I wanted to create a final version of my portfolio site, I had created a few portfolio projects before, but I wanted to create something better, more complex
                    </>
                },
                {
                    title:"Future",
                    barColor:"bg-purple-500",
                    content:
                    <>
                        This portfolio project will be upgraded with new content and also maybe new styles or animations
                    </>
                }
            ],
            images:[]
        },
        {
            name:"E-commerce system",
            simpleDescription:"Full-stack e-commerce system",
            tags:[
                "Full-Stack",
                "Database System",
                "MySql",
                "React.js",
                "Node.js",
                "Tailwind",
                "TypeScript"
            ],
            
            tagsColors:[
                "bg-cyan-700",
                "bg-green-700",
                "bg-orange-800",
                "bg-sky-600",
                "bg-lime-700",
                "bg-blue-900",
                "bg-blue-800"
            ],
            image:ecommerce1,
            completed:false,

            sources:[
                {
                    text:"Github",
                    href:"https://github.com/kkamildev/e-commerce-system",
                    buttonColor:"bg-pink-800 hover:bg-pink-700",
                    icon:faGithub
                }
            ],
            technologies:[
                {
                    title:"React",
                    shadowColor:"shadow-sky-500",
                    points:[
                        "Front-end",
                        "UI",
                        "App interface"
                    ]
                },
                {
                    title:"TypeScript",
                    shadowColor:"shadow-blue-700",
                    points:[
                        "Project general language",
                        "Adding types to front-end models",
                        "TS-sequelize"
                    ]
                },
                {
                    title:"Tailwind",
                    shadowColor:"shadow-blue-800",
                    points:[
                        "Creating styles",
                        "Creating animations",
                        "App UI formatting"
                    ]
                },
                {
                    title:"Vite",
                    shadowColor:"shadow-purple-800",
                    points:[
                        "Project management",
                        "Project setup",
                    ]
                },
                {
                    title:"Node.js",
                    shadowColor:"shadow-lime-600",
                    points:[
                        "Back-end",
                        "Server logic",
                        "Requests to database"
                    ]
                },
                {
                    title:"Express.js",
                    shadowColor:"shadow-zinc-400",
                    points:[
                        "API creating",
                        "Middlewares",
                        "Creating request/response system"
                    ]
                },
                {
                    title:"MySql",
                    shadowColor:"shadow-orange-600",
                    points:[
                        "Database creating",
                        "Database general language",
                    ]
                },
                {
                    title:"Zustand",
                    shadowColor:"shadow-stone-800",
                    points:[
                        "State managament",
                        "Creating global stores"
                    ]
                },
            ],
            text:[
                {
                    title:"Project assumptions",
                    barColor:"bg-red-800",
                    content:
                    <>
                        Main assumptions was to create a full e-commerce system with admin panel to manage products and orders. Store can be configured fully by admin, admin can add specialist users,
                        preapare products and their variants, can have full statistics about sales
                    </>
                },
                {
                    title:"Origin of project",
                    barColor:"bg-green-800",
                    content:
                    <>
                        I wanted to create this project to test my skills, unfortunately front-end is so hard for me in this project, so currently I have stopped creating project
                    </>
                },
                {
                    title:"Future",
                    barColor:"bg-purple-500",
                    content:
                    <>
                        Maybe I will return to creating this project, but now only backend is finished, frontend still is uncomplete
                    </>
                }
            ],
            images:[]
        }
    ]
}

// export modules
export default ProjectsData;
export type {Project, ProjectSource, TechnologyCard}