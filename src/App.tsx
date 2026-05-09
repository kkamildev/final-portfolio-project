

// import types
import type { FC } from "react";

// import modules
import Navbar from "./nav/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HistoryPage from "./pages/HistoryPage";
import KnowledgePage from "./pages/KnowledgePage";
import ContactPage from "./pages/ContactPage";
import CommunityPage from "./pages/CommunityPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";


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
            <section id="scroll-container" className="w-full min-h-screen bg-zinc-900 py-25 lg:py-10 px-3 lg:px-10 overflow-y-scroll">
                <Routes>
                    <Route path="/" element={<AboutPage/>}/>
                    <Route path="/history" element={<HistoryPage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/knowledge" element={<KnowledgePage/>}/>
                    <Route path="/community" element={<CommunityPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/projects/:id" element={<ProjectPage/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </section>
        </main>
    )
}

// export components
export default App;

