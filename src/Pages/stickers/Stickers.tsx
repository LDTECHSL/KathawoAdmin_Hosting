import React, { useState } from "react";
import CommanLayout from "src/Layouts/Comman";
import "../../Common/css/pages.css";
import { CloudUploadTwoTone, Send, Delete } from "@mui/icons-material";
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

    const handleDelete = (idx: number) => {
        console.log("Delete sticker at index:", idx);
        // TODO: remove from state when using uploaded images
    };

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
                        <div className="sticker-inner" key={idx}>
                            <img src={src} alt={`sticker-${idx}`} />
                            <div className="overlay">
                                <Delete
                                    sx={{ fontSize: 32, color: "red", cursor: "pointer" }}
                                    onClick={() => handleDelete(idx)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </>
        </CommanLayout>
    );
}
