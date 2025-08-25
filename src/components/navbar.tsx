import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Navbar = () => {
    const location = useLocation();

    const showBackButton = location.pathname !== "/";

    return (
        <nav className="w-full bg-white/70 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-2">
                <div className="gap-2 flex items-center">
                    <img src="/logo.png" alt="Logo" className="w-12 h-12" />
                    <h1 className="text-2xl font-bold text-violet-900 italic">MelTools</h1>
                </div>
                {showBackButton && (
                    <Link
                        to="/"
                        className="flex cursor-pointer items-center gap-1 text-violet-900 hover:text-violet-700 font-semibold hover:underline"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
