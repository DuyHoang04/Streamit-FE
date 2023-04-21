import React, { useState, useRef } from "react";
import Dropzone from "react-dropzone";
import "./drop-file.scss";
import { CloudUploadOutlined } from "@ant-design/icons";

const DropFile = ({ label, title }) => {
  const [mediaUrl, setMediaUrl] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const dropzoneRef = useRef();

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

  const handleOnClick = () => {
    dropzoneRef.current.open();
  };

  return (
    <div className="drop-file-container">
      <div className="drop-label">{label}</div>
      <div className="drop-file" onClick={handleOnClick}>
        <CloudUploadOutlined />
        <Dropzone
          ref={dropzoneRef}
          onDrop={handleDrop}
          accept="image/*,video/*"
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>{title}</p>
            </div>
          )}
        </Dropzone>
      </div>
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