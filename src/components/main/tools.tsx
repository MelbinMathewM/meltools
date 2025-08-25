import { Link } from "react-router-dom";
import { ImageIcon, QrCode, ToolCase } from "lucide-react";

const tools = [
    {
        title: "Image → WebP",
        description: "Convert your images into optimized WebP format.",
        icon: <ImageIcon className="w-10 h-10 text-violet-600" />,
        path: "/webp-converter",
    },
    {
        title: "QR Code Generator",
        description: "Generate high quality QR codes instantly.",
        icon: <QrCode className="w-10 h-10 text-violet-600" />,
        path: "/qr-code",
    },
];

const Tools = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white px-6 py-12">
            <h1 className="flex items-center gap-3 text-3xl font-bold text-gray-800 mb-10 text-center">
                <ToolCase size={32}/> Toolbox
            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {tools.map((tool, index) => (
                    <Link
                        key={index}
                        to={tool.path}
                        className="flex flex-col items-center p-6 bg-white rounded-md shadow-xl hover:shadow-lg hover:-translate-y-1 transition"
                    >
                        {tool.icon}
                        <h2 className="mt-4 text-xl font-semibold text-gray-800">
                            {tool.title}
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 text-center">
                            {tool.description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Tools;
