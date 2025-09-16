import React from "react";

const VideoModal = ({ isTrue, iframeSrc, handelClose }) => {
  if (!isTrue) return null;

  return (
    <div
      className="video-modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
      onClick={handelClose}
    >
      <div
        className="video-modal-content"
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "800px",
          aspectRatio: "16/9",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handelClose}
          style={{
            position: "absolute",
            top: "-40px",
            right: "0",
            background: "white",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            cursor: "pointer",
            fontSize: "18px",
            zIndex: 10000,
          }}
        >
          ×
        </button>
        <iframe
          src={iframeSrc}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
