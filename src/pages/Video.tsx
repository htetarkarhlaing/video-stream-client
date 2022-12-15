import React from "react";

const Video = ({ key, onChange }: any) => {
  return (
    <div className="w-screen h-screen relative">
      <button
        className="absolute z-50 bg-neutral-900 w-16 h-16 grid place-items-center"
        onClick={() => onChange("")}
      >
        <i className="ri-arrow-left-line text-white text-2xl"></i>
      </button>
      <video controls className="w-full h-full"></video>
    </div>
  );
};

export default Video;
