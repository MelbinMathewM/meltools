import { Github, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-600 pt-8 pb-4">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full bg-white shadow-lg p-1" />
                    <span className="font-bold text-xl italic tracking-wide">MelTools</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                    <div className="flex gap-3 mt-2 md:mt-0">
                        <a
                            href="https://melbinmathew.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-violet-600 transition-colors"
                        >
                            Portfolio
                        </a>
                        <a href="https://github.com/melbinmathewm" target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/melbin-mathew-7996b82b5" target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t text-gray-400 mx-12 mt-6 text-center pt-4 text-sm opacity-80">
                © {new Date().getFullYear()} MelTools. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
