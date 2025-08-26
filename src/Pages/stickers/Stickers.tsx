import React, { useState } from "react";
import CommanLayout from "src/Layouts/Comman";
import "../../Common/css/pages.css";
import { CloudUploadTwoTone } from "@mui/icons-material";

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

  return (
    <CommanLayout name="Stickers" path="/stickers">
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
    </CommanLayout>
  );
}
