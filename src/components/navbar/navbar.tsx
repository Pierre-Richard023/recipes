import {Outlet, Link} from "react-router-dom";
import Themes from "../themes/themes.tsx";


const Navbar = () => {

    return (
        <>
            <nav className="w-full border-b-2  border-b-gray-400 dark:border-b-white ">
                <div className="w-full py-4 flex justify-center space-x-4 ">

                    <Link to={"/"} className="flex items-center">
                        <img src="/recipe.svg" className="h-8 mr-3" alt="Recipes Logo"/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                        >
                            Recipes
                        </span>
                    </Link>

                    <Themes/>
                </div>
            </nav>

            <Outlet/>
        </>
    )
}

export default Navbar