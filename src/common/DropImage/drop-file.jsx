import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Dropzone from "react-dropzone";
import "./drop-file.scss";
import { CloudUploadOutlined } from "@ant-design/icons";
import { mediaTypes } from "../../utils/actionTypes";

const DropFile = ({ url, label, title, setFile }) => {
  const [mediaUrl, setMediaUrl] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const dropzoneRef = useRef();

  useEffect(() => {
    if (!url) {
      setMediaUrl("");
    }
  }, [url]);

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const mediaUrl = URL.createObjectURL(file);
      setMediaUrl(mediaUrl);
      setFile(acceptedFiles[0]);

      if (file.type.includes("image")) {
        setMediaType("image");
      } else if (file.type.includes("video")) {
        setMediaType("video");
      }
    },
    [setFile]
  );

  const handleOnClick = useCallback(() => {
    dropzoneRef.current.open();
  }, []);

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
