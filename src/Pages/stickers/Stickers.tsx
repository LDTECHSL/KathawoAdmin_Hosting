import React, { useState } from "react";
import CommanLayout from "src/Layouts/Comman";
import "../../Common/css/pages.css";
import { CloudUploadTwoTone, Send } from "@mui/icons-material";
import logoImg from "../../Assets/Images/logo.png";

export default function Stickers() {
    const [files, setFiles] = useState<File[]>([]);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles(prev => [...prev, ...droppedFiles]);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleSave = () => {
        // TODO: Upload logic
    };

    // 👇 Sample images array (can be replaced with API or uploaded images later)
    const sampleImages = [
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
        logoImg,
    ];

    return (
        <CommanLayout
            name="Stickers"
            path="/stickers"
            isBtn={true}
            icon={<Send />}
            btnName="Upload"
            onclick={handleSave}
            variety="primary"
        >
            <>
                {/* Drag & Drop Zone */}
                <div
                    className="full-width-outer"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    style={{
                        border: "2px dashed #aaa",
                        padding: "50px",
                        textAlign: "center",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }}
                >
                    <CloudUploadTwoTone style={{ fontSize: "48px", color: "#aaa" }} />
                    <p>Drag and drop your gifs here</p>
                    {files.length > 0 && (
                        <ul>
                            {files.map((file, idx) => (
                                <li key={idx}>{file.name}</li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Stickers Section */}
                <div className="stickers-outer">
                    {sampleImages.map((src, idx) => (
                        <div key={idx} className="sticker-inner">
                            <img src={src} alt={`sticker-${idx}`} style={{ width: "90%" }} />
                        </div>
                    ))}
                </div>
            </>
        </CommanLayout>
    );
}
