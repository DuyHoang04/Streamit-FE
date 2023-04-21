import React, { useState } from "react";
import Dropzone from "react-dropzone";
import "./dropFile.scss";

const DropFile = ({ label }) => {
  const [mediaUrl, setMediaUrl] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const mediaUrl = URL.createObjectURL(file);
    setMediaUrl(mediaUrl);

    if (file.type.includes("image")) {
      setMediaType("image");
    } else if (file.type.includes("video")) {
      setMediaType("video");
    }
  };

  return (
    <div className="drop-file">
      <Dropzone onDrop={handleDrop} accept="image/*,video/*">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>{label}</p>
          </div>
        )}
      </Dropzone>
      {mediaUrl && (
        <>
          {mediaType === "image" ? (
            <img src={mediaUrl} alt="Uploaded image" />
          ) : (
            <video controls>
              <source src={mediaUrl} type={mediaUrl.type} />
            </video>
          )}
        </>
      )}
    </div>
  );
};

export default DropFile;
