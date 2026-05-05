

// import types
import type { FC } from "react";

// import modules
import PageTitle from "../components/PageTitle";
import SEO from "../utils/SEO";

// import assets
import me from "../assets/me.jpg"
import EventSection from "../components/community/EventSection";



// TS types
type Props = {

}

// main component
const CommunityPage : FC<Props> = ({}) => {
    return(
        <>
            <SEO
                title="Community - KKamildev Portfolio"
                desc="Hi my name is Kamil Kijak, I am student of computer science. Here is my part in IT community"
                url="https://aboutme.pixlesofte.com/community"
                img={me}
            />
            <section className="m-2 p-2 flex flex-col text-white">
                <PageTitle title="Community" subtitle="Here is my part in IT community"/>
                <section className="my-10">
                    <h1 className="text-3xl font-extrabold">IT events</h1>
                    <section className="h-2.5 bg-red-800 my-5 rounded-2xl w-1/2"></section>
                </section>
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <EventSection
                        title="NextGenIT Kraków"
                        subtitle="From 2026, 2 meetups"
                        category="IT Meetups"
                        results={[
                            "Networking with IT field people",
                            "Learning working in Agile",
                            "Enhancing communication skills",
                            "Teamwork"
                        ]}
                        linkedinProfile="https://linkedin.com/company/nextgenit-krakow/posts/?feedView=all"
                    />
                </section>
            </section>
        </>
    )
}

// export components
export default CommunityPage;