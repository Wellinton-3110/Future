import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => (
  <ReactPlayer
    width="100%"
    height="100%"
    url="/Zenite/futureVideo.mp4"
    muted={true}
    controls={true}
    playing={true}
  />
);

export default VideoPlayer;
