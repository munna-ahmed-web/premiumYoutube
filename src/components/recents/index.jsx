

import { useStoreState } from "easy-peasy";
import PlayListCardItem from "../playlist-card-item";

import { Typography, Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";





const RecentsPlaylist = () => {
    const { playlist:{data}, recents:{items} } = useStoreState((store) => store);
    const playListArray = []
    const playLists = Object.values(data);

    items.forEach((id)=>{
      playLists.forEach((singlelist)=>{
        if(singlelist.playListId == id){
          playListArray.push(singlelist)
        }
      })
    })

  return (
    <div>
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Recent Playlists
      </Typography>
      <hr />
      {playListArray.length > 0 && (
        <Grid
          container
          gap={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {playListArray.map((item) => {
            return (
              <PlayListCardItem
                key={uuidv4()}
                playListThumbnail={item.playListThumbnail}
                playListTitle={item.playListTitle}
                channelTitle={item.channelTitle}
                playlistId={item.playListId}
              />
            );
          })}
        </Grid>
      )}
    </div>
  );
}

export default RecentsPlaylist;