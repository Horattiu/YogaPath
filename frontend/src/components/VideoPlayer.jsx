// import React, { useRef, useEffect } from "react";

// const VideoPlayer = ({ url, options, className }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.src = url;
//       Object.keys(options).forEach((option) => {
//         videoRef.current[option] = options[option];
//       });
//       videoRef.current.play(); // Începe redarea video-ului
//     }
//   }, [url, options]);

//   return <video ref={videoRef} className={className} playsInline muted />;
// };

// export default VideoPlayer;

import React, { useRef, useEffect } from "react";

const VideoPlayer = ({ url, className = "" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = url;
      videoRef.current.play(); // Autoplay video
    }
  }, [url]);

  return (
    <video
      ref={videoRef}
      className={`${className} pointer-events-none`}
      autoPlay
      loop
      muted
      playsInline
    />
  );
};

export default VideoPlayer;
