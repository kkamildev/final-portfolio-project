

// import types
import type { FC } from "react";

// import modules
import Navbar from "./nav/Navbar";
import { Routes } from "react-router-dom";


// TS types
type Props = {

}

// main component
const App : FC<Props> = ({}) => {
    return (
        <main className="flex justify-start max-h-screen overflow-y">
            <Navbar></Navbar>
            <section className="w-112.5 h-screen bg-zinc-900 hidden lg:block">

            </section>
            <section className="w-full min-h-screen bg-zinc-900 py-5 px-1">
                <h1>dsad</h1>
                <Routes>

                </Routes>
            </section>
        </main>
    )
}

// export components
export default App;

