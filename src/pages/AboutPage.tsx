

// import types
import type { FC } from "react";

// import modules
import {Helmet} from "react-helmet-async"
import PageTitle from "../components/PageTitle";


// TS types
type Props = {

}

// main component
const AboutPage : FC<Props> = ({}) => {
    return (
        <>
            <Helmet>
                <title>About Me - KKamildev</title>
            </Helmet>
            <section className="m-2 flex flex-col">
                <PageTitle title="About Me" subtitle="So let me introduce myself"/>
                <h1 className="text-white">Hello world</h1>
            </section>
        </>
    )
}

// export components
export default AboutPage;