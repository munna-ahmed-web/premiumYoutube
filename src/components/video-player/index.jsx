import { Container } from "@mui/material";
import { useState } from "react";
import ReactYTPlayer from "./video-player";

const VideoPlayer = ({ playlist, videoId }) => {
  const { playlistItems } = playlist;
  let videoDetails = null;
  
  playlistItems.forEach((item) => {
    if (item.contentDetails.videoId == videoId) {
      videoDetails = item
    }
  });

  return (
    <Container sx={{ my: 16 }}>
      {videoDetails && <ReactYTPlayer vDetails={videoDetails} />}
    </Container>
  );
};

export default VideoPlayer;
