import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Hero = () => {
    return (
        <section className="mt-16 flex flex-col md:flex-row items-center justify-center text-center md:text-left py-16 px-2 md:px-6 bg-violet-600 text-white">
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 px-4 md:px-12 py-6"
            >
                <h1 className="text-4xl font-extrabold mb-4 leading-tight">
                    Welcome to <span className="italic">MelTools</span>
                </h1>
                <p className="text-lg max-w-xl mb-6 opacity-90">
                    A collection of simple, powerful tools to make your daily tasks easier —
                    from image optimization to quick QR generation and more.
                </p>
                <a
                    href="https://melbinmathew.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-violet-900 font-semibold shadow-lg
                       transition transform hover:scale-105 hover:translate hover:shadow-xl"
                >
                    Visit My Portfolio
                    <ExternalLink className="w-5 h-5" />
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-1 flex justify-center"
            >
                <div className="relative">
                    <img
                        src="/melbin.webp"
                        alt="Melbin Mathew"
                        className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-2xl border-4 border-white object-cover transition transform hover:scale-105 hover:translate"
                    />

                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-12 h-12 bg-white md:w-14 md:h-14 absolute bottom-5 right-0 rounded-full border-2 border-white shadow-lg transition transform hover:scale-110 hover:translate"
                    />
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
