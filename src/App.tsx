

// import types
import type { FC } from "react";

// import modules
import Navbar from "./nav/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";


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
            <section className="w-full min-h-screen bg-zinc-900 py-25 lg:py-10 px-10">
                <Routes>
                    <Route path="/aboutme" element={<AboutPage/>}/>
                    <Route path="/history" element={<></>}/>
                    <Route path="/projects" element={<></>}/>
                    <Route path="/knowledge" element={<></>}/>
                    <Route path="/organizations" element={<></>}/>
                    <Route path="/contact" element={<></>}/>
                </Routes>
            </section>
        </main>
    )
}

// export components
export default App;

