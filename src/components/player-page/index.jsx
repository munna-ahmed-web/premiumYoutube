
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
    <>
      <div className="mainPlayerContainer">
        <div className="player" >
          {selectedPlaylist && (
            <VideoPlayer playlist={selectedPlaylist} videoId={videoId} />
          )}
        </div>

        <div className="playlistItem" >
          {selectedPlaylist && (
            <ShowVideoList
              singlePlaylist={selectedPlaylist}
              getVideoId={getId}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PlayerPage;



