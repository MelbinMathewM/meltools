import { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import jsPDF from "jspdf";
import { QrCode, Loader2, Download } from "lucide-react";

export default function QRCodeMain() {
    const qrRef = useRef<HTMLDivElement>(null);
    const [url, setUrl] = useState("");
    const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const [downloadPDFEnabled, _setDownloadPDFEnabled] = useState(true);
    const [downloadPNGEnabled, _setDownloadPNGEnabled] = useState(true);

    const generateQR = () => {
        setLoading(true);
        setTimeout(() => {
            setGeneratedUrl(url.trim());
            setLoading(false);
        }, 500);
    };

    const downloadPDF = () => {
        const canvas = qrRef.current?.querySelector("canvas");
        if (!canvas) return;

        const imgData = canvas.toDataURL("image/png", 1.0);
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "pt",
            format: "a4",
        });

        const qrSize = 300;
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const x = (pageWidth - qrSize) / 2;
        const y = (pageHeight - qrSize) / 2;

        pdf.addImage(imgData, "PNG", x, y, qrSize, qrSize);
        pdf.setFontSize(16);
        pdf.text("Scan to visit the site", pageWidth / 2, y + qrSize + 30, {
            align: "center",
        });

        pdf.save("qr-code.pdf");
    };

    const downloadPNG = () => {
        const canvas = qrRef.current?.querySelector("canvas");
        if (!canvas) return;

        const imgData = canvas.toDataURL("image/png", 1.0);
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "qr-code.png";
        link.click();
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 p-6 min-h-screen">
            <h1 className="flex items-center gap-4 text-3xl font-bold text-gray-800 mb-8 text-center">
                    <QrCode className="w-8 h-8 text-violet-600" /> QR Code Generator
            </h1>

            <div className="flex flex-col md:flex-row gap-2 items-center mb-4">
                <input
                    type="text"
                    placeholder="Eg: https://www.yourdomain.com"
                    value={url}
                    onChange={(e) => {
                        setUrl(e.target.value);
                        setGeneratedUrl(null);
                    }}
                    className="w-64 md:w-78 px-4 py-2 rounded-md border-2 border-transparent 
                               bg-white
                               focus:border-violet-500 focus:ring-2 focus:ring-violet-300 
                               focus:outline-none shadow-md placeholder-gray-400 
                               text-gray-800 transition-all duration-300 hover:shadow-lg"
                />
                <button
                    onClick={generateQR}
                    disabled={url === ""}
                    className="flex items-center cursor-pointer text-md gap-2 px-4 py-2.5 bg-purple-600 text-white font-medium rounded-md shadow-lg 
                               hover:bg-purple-700 disabled:bg-purple-300 transform hover:scale-105 transition"
                >
                    Generate QR
                </button>
            </div>

            <div className="flex flex-col items-center">
                {!generatedUrl ? (
                    <div className="bg-white p-10 rounded-lg shadow-xl text-gray-400 flex flex-col items-center">
                        {loading ? (
                            <Loader2 className="animate-spin w-12 h-12 text-purple-500" />
                        ) : (
                            <QrCode className="w-16 h-16 text-gray-400" />
                        )}
                        <p className="mt-4 text-gray-500 text-sm">
                            Enter a URL and click Generate to create QR
                        </p>
                    </div>
                ) : (
                    <div
                        ref={qrRef}
                        className="bg-white p-2 rounded-lg shadow-xl mb-6 hover:scale-105 transition-transform"
                    >
                        <QRCodeCanvas
                            value={generatedUrl}
                            size={300}
                            bgColor="#ffffff"
                            fgColor="#000000"
                            level="L"
                            includeMargin={true}
                        />
                    </div>
                )}
            </div>

            {generatedUrl && (
                <div className="flex flex-col md:flex-row gap-4">
                    {downloadPDFEnabled && (
                        <button
                            onClick={downloadPDF}
                            className="flex items-center gap-2 cursor-pointer px-5 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transform hover:scale-105 transition"
                        >
                            <Download /> <span className="font-semibold">PDF</span>
                        </button>
                    )}
                    {downloadPNGEnabled && (
                        <button
                            onClick={downloadPNG}
                            className="flex items-center gap-2 cursor-pointer px-5 py-2 bg-green-500 text-white rounded-md shadow-lg hover:bg-green-600 transform hover:scale-105 transition"
                        >
                            <Download /> <span className="font-semibold">PNG</span>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
