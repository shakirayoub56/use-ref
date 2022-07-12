import { useEffect, useRef } from "react";

function Video() {
  const videoRef = useRef(null);

  const startVideo = () => {
    console.log("play");
    videoRef.current.play();
  };
  const pauseVideo = () => {
    console.log("pause");
    videoRef.current.pause();
  };
  return (
    <div>
      <video
        width="200px"
        ref={videoRef}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      />
      <div>
        <button onClick={startVideo}>START</button>
        <button onClick={pauseVideo}>PAUSE</button>
      </div>
    </div>
  );
}

export default Video;
