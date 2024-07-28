import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => (
  <ReactPlayer
    width="100%"
    height="100%"
    url="/Future/futureVideo.mp4"
    muted={true} // Inicia o vídeo sem som
    controls={true}
    playing={true}
  />
);

export default VideoPlayer;
