

// import types
import {type FC } from "react";

// import modules
import PageTitle from "../components/PageTitle";
import AnimatedBar from "../components/AnimatedBar";
import SEO from "../utils/SEO";

// import assets
import bullseye from "../assets/bullseye.png"
import questionMark from "../assets/questionMark.png"
import it from "../assets/it.png"
import me from "../assets/me.jpg"

// TS types
type Props = {

}

// main component
const HistoryPage : FC<Props> = ({}) => {
    return(
        <>
            <SEO
                title="My work and learn history - KKamildev Portfolio"
                desc="Hi my name is Kamil Kijak, I am student of computer science. Let me tell my interesting learning and working path"
                url="https://aboutme.pixlesofte.com/history"
                img={me}
            />
            <section className="m-2 p-2 flex flex-col">
                <PageTitle title="My history" subtitle="My interesting learning and working path"/>
            </section>
        </>
    )
}

// export components
export default HistoryPage;