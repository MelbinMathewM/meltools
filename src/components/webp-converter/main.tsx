import { ArrowRight, Download, Image as ImageIcon, UploadCloud } from "lucide-react";
import { useState } from "react";

export default function WebPMain() {
    const [webpUrl, setWebpUrl] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string>("converted.webp");
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name.replace(/\.[^/.]+$/, "") + ".webp");
        setLoading(true);
        setWebpUrl(null);

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new window.Image();
            img.src = event.target?.result as string;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                if (!ctx) return;

                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                const webpData = canvas.toDataURL("image/webp", 0.8);
                setWebpUrl(webpData);
                setLoading(false);
            };
        };
        reader.readAsDataURL(file);
    };

    const downloadWebP = () => {
        if (!webpUrl) return;
        const a = document.createElement("a");
        a.href = webpUrl;
        a.download = fileName;
        a.click();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <div className="p-8 w-full max-w-lg">
                <h1 className="flex items-center justify-center gap-4 text-3xl font-bold text-gray-800 mb-8 text-center">
                    <ImageIcon  className="w-8 h-8 text-violet-600" /> Image <ArrowRight /> WebP
                </h1>

                <label className="flex flex-col items-center justify-center w-full py-2 border-2 border-dashed border-violet-400 rounded-lg cursor-pointer bg-white hover:bg-white/99 transition">
                    <div className="flex items-center gap-3">
                        <UploadCloud className="w-6 h-6 text-violet-500" />
                        <span className="text-violet-600 text-sm">Click to upload or drag an image</span>
                    </div>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </label>

                {loading && (
                    <div className="mt-6 flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
                        <span className="ml-3 text-gray-600">Processing image...</span>
                    </div>
                )}

                {webpUrl && !loading && (
                    <div className="flex flex-col items-center justify-center mt-6">
                        <img
                            src={webpUrl}
                            alt="Converted"
                            className="w-72 h-auto rounded-lg shadow-lg mb-4"
                        />
                        <div className="relative inline-block group">
                            <button
                                onClick={downloadWebP}
                                className="flex items-center gap-2 px-6 py-2 bg-violet-600 text-white font-medium rounded-md shadow hover:bg-violet-700 transition"
                            >
                                <Download className="w-5 h-5" />
                                WebP
                            </button>

                            <div className="absolute -bottom-15 left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-500 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                <span className="font-semibold">File will be saved as: </span>{fileName}
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-500 rotate-45"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
