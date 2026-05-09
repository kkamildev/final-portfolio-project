
// import types
import type { FC } from "react";

// import modules
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// TS types
type Props = {

}


// main component
const StartScroll : FC<Props> = ({}) => {
    const { pathname } = useLocation();

    useEffect(() => {
        const container = document.getElementById("scroll-container");
        if (!container) return;

        container.scrollTo(0, 0);

        setTimeout(() => container.scrollTo(0, 0), 0);
    }, [pathname]);
    return null;
}

// export modules
export default StartScroll;