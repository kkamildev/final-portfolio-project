


// import types
import type { FC} from "react";
import { type Project } from "../../utils/ProjectsData"

// import modules
import {useSearchParams} from "react-router-dom";
import ProjectsData from "../../utils/ProjectsData";


// TS types
type Props = {
    
}

// main component
const SearchTipBar : FC<Props> = ({}) => {

    const [searchParams, setSearchParams] = useSearchParams();


    const namesFilter = (obj : Project) : boolean => {
        const searchInput = searchParams.get("search") || "";
        if(searchInput.length == 0) {
            return false;
        }
        if(obj.name.toLowerCase() == searchInput.toLowerCase()) {
            return false;
        }
        return obj.name.toLowerCase().startsWith(searchInput.toLowerCase())
    }

    const tagsFilter = (tag : string) : boolean => {
        let searchInput = searchParams.get("search") || "";
        if(searchInput.length == 0) {
            return false;
        }
        if("#" + tag.toLowerCase() == searchInput.toLowerCase()) {
            return false;
        }
        if(searchInput[0] == "#") {
            searchInput = searchInput.substring(1);
        }
        return tag.toLowerCase().startsWith(searchInput.toLowerCase())
        
    }
    
    return(
        <ul className="absolute top-[110%] w-full max-h-60 overflow-y-auto bg-zinc-800 z-0 rounded-lg text-white">
            {
                ProjectsData().filter((obj) => namesFilter(obj)).map((obj, index) =>
                    <li key={index} className="font-extrabold text-xl p-3 m-2 cursor-pointer hover:bg-zinc-900 transition-colors duration-100 ease-in-out rounded-xl" onClick={() => setSearchParams({search:obj.name})}>
                        {obj.name}
                    </li>
                )
            }
            {
                ProjectsData().reduce<string[]>((acc, project) => [...acc, ...project.tags], []).filter((tag) => tagsFilter(tag)).filter((item, index, arr) => arr.indexOf(item) === index).map((obj : string, index) =>
                    <li key={index} className="font-extrabold text-xl p-3 m-2 cursor-pointer hover:bg-zinc-900 transition-colors duration-100 ease-in-out rounded-xl" onClick={() => setSearchParams({search:"#" + obj})}>
                        #{obj}
                    </li>
                )
            }
        </ul>
    )
}

// export modules
export default SearchTipBar;