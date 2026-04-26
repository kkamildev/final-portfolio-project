

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
        <main className="flex justify-start max-h-screen">
            <Navbar></Navbar>
            <section className="w-full h-screen bg-zinc-900">
                <h1>dsad</h1>
                <Routes>

                </Routes>
            </section>
        </main>
    )
}

// export components
export default App;

