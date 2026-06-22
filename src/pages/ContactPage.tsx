

// import types
import type { FC } from "react";

// import modules
import PageTitle from "../components/PageTitle";
import SEO from "../utils/SEO";
import SocialSection from "../components/SocialSection";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AnimatedBar from "../components/AnimatedBar";

// import assets
import me from "../assets/me.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";



// TS types
type Props = {

}

// main component
const ContactPage : FC<Props> = ({}) => {
    return(
        <>
            <SEO
                title="Contact - KKamildev Portfolio"
                desc="Hi my name is Kamil Kijak, I am student of computer science. You get to know me. So here is contact and socials"
                url="https://aboutme.pixlesofte.com/contact"
                img={me}
            />
            <section className="m-2 p-2 flex flex-col text-white">
                <PageTitle title="Contact and Socials" subtitle="You get to know me. So here is contact and socials"/>
                <section className="my-10">
                    <h1 className="text-3xl font-extrabold">My socials</h1>
                    <section className="h-2.5 bg-red-800 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="flex flex-col gap-y-20">
                    <SocialSection
                        title="Linkedin"
                        description="Business contacts, Career path, Networking"
                        icon={faLinkedin}
                        iconClassName="text-blue-800"
                        className="shadow-blue-900"
                        href="https://linkedin.com/in/kkamildev"
                    />
                    <SocialSection
                        title="Github"
                        description="Developer account, Actual projects, Projects database"
                        icon={faGithub}
                        iconClassName="text-pink-800"
                        className="shadow-pink-900"
                        href="https://github.com/kkamildev"
                    />
                    <SocialSection
                        title="Instagram"
                        description="Private life as Software Developer"
                        icon={faInstagram}
                        iconClassName="text-orange-700"
                        className="shadow-orange-700"
                        href="https://www.instagram.com/kkamildev"
                    />
                </section>
                <section className="my-10">
                    <AnimatedBar
                        animationDuration={Math.random() * 1000 + 1000}
                        className="bg-red-900 m-0!"
                        borders={["20%", "60%"]}
                    />
                    <AnimatedBar
                        animationDuration={Math.random() * 1000 + 1000}
                        className="bg-red-800 m-0!"
                        borders={["20%", "60%"]}
                    />
                    <AnimatedBar
                        animationDuration={Math.random() * 1000 + 1000}
                        className="bg-red-700 m-0!"
                        borders={["20%", "60%"]}
                    />
                </section>
                <section className="my-10">
                    <h1 className="text-3xl font-extrabold">Contact</h1>
                    <section className="h-2.5 bg-red-800 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="flex flex-col gap-5 items-start">
                    <section className="p-4 bg-zinc-800 flex items-center rounded-xl w-full xl:w-[50%]">
                        <FontAwesomeIcon icon={faLocationDot} className="text-5xl"/>
                        <h2 className="font-bold text-lg ml-5">Poland, Kraków</h2>
                    </section>
                    <section className="p-4 bg-zinc-800 flex items-center rounded-xl w-full xl:w-[50%]">
                        <FontAwesomeIcon icon={faEnvelope} className="text-5xl"/>
                        <h2 className="font-bold text-lg ml-5">
                            <a href="mailto:kamil.kijak@pixlesofte.com" className="break-all">kamil.kijak@pixlesofte.com</a>
                        </h2>
                    </section>
                </section>
                <section className="mt-10">
                    <AnimatedBar
                        animationDuration={Math.random() * 1000 + 1000}
                        className="bg-red-900 m-0!"
                        borders={["20%", "60%"]}
                    />
                    <AnimatedBar
                        animationDuration={Math.random() * 1000 + 1000}
                        className="bg-red-800 m-0!"
                        borders={["20%", "60%"]}
                    />
                    <AnimatedBar
                        animationDuration={Math.random() * 1000 + 1000}
                        className="bg-red-700 m-0!"
                        borders={["20%", "60%"]}
                    />
                </section>
            </section>
        </>
    )
}

export default ContactPage;