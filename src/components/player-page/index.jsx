import { Container, Grid } from "@mui/material";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useParams } from 'react-router-dom'
import ShowVideoList from "./ShowVideoList";
import VideoPlayer from "../video-player";
import { useState } from "react";

const PlayerPage = () => {
  const { addToRecent } = useStoreActions((action) => action.recents);
  const { playlistId } = useParams();
  addToRecent(playlistId)
  const {data} =  useStoreState((state) => state.playlist);
  const selectedPlaylist = data[playlistId];
  const [videoId, setVideoId] = useState(
    selectedPlaylist.playlistItems[0].contentDetails.videoId
  );

  const getId = (id) =>{
    setVideoId(id)
  }
 

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item md={8}>
          {selectedPlaylist && (
            <VideoPlayer playlist={selectedPlaylist} videoId={videoId} />
          )}
        </Grid>

        <Grid item md={4} sx={{ my: 16 }} >
          {selectedPlaylist && (
            <ShowVideoList
              singlePlaylist={selectedPlaylist}
              getVideoId={getId}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlayerPage;



