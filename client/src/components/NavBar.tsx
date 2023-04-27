import { BsFillMoonStarsFill } from "react-icons/bs";
const NavBar = () => {
    return (
        <nav className="mx-5 py-8 flex justify-between">
            <h1 className="text-xl">dreydev</h1>
            <ul className="flex items-center">
                <li><BsFillMoonStarsFill className="cursor-pointer text-2xl" /></li>
                <li><a href="#" className="bg-gradient-to-r bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
            </ul>
        </nav>
    )
}

export default NavBar
