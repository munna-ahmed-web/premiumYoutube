import { Container } from "@mui/material";
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
    <Container>
      {videoDetails && <ReactYTPlayer vDetails={videoDetails} />}
    </Container>
  );
};

export default VideoPlayer;
