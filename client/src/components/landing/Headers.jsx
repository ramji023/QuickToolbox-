import { NavLink } from "react-router";


export default Headers = () => (
    <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <div className="text-2xl font-bold text-gray-800 tracking-wide">
                QuickToolbox
            </div>
            <NavLink to="/home" >
            <button className="text-gray-600 hover:text-gray-800 cursor-pointer font-bold">Signup</button>
            </NavLink>
        </div> 
    </header>
);
