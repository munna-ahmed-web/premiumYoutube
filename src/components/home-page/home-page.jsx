
import { Container, Grid, Typography } from "@mui/material";
import PlayListCardItem  from "../playlist-card-item";
import {useStoreState} from 'easy-peasy'
import RecentsPlaylist from "../recents";
import FavoriteItems from "../favorite";




const HomePage = () => {
    

    const {
      playlist: { data },
      recents,
      favorites,
    } = useStoreState((store) => store);

    const playListArray = Object.values(data);

    let recentsCom;
    if (data && recents.items) {
      recentsCom = <RecentsPlaylist />;
    }

    let favoriteCom;
    if(data && favorites.items){
      favoriteCom = <FavoriteItems />;
    }

  return (
    <Container maxWidth="lg" sx={{ my: 16 }}>
      <div>{recentsCom}</div>
      <div>{favoriteCom}</div>
      <div>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: '25px'
          }}
        >
          All PlayLists
        </Typography>
        <hr />
        <div>
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
                    key={item.playListId}
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
      </div>
    </Container>
  );
};


export default HomePage;





