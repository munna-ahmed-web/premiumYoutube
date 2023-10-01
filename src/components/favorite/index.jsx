import { useStoreState } from "easy-peasy";
import FavoriteCardItem from "./favorite-card-item";
import { Grid, Typography } from "@mui/material";

const FavoriteItems = () => {
  const {
    favorites: { items },
    playlist: { data },
  } = useStoreState((state) => state);

  const favoriteArray = [];
  const playlistArrayFromApi = Object.values(data);

  items.forEach((id) => {
    playlistArrayFromApi.forEach((singlePlaylist) => {
      if (singlePlaylist.playListId == id) {
        favoriteArray.push(singlePlaylist);
      }
    });
  });

  return (
    <div>
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt:'25px'
        }}
      >
        Favorite Playlists
      </Typography>
      <hr />
      {favoriteArray.length > 0 && (
        <Grid
          container
          gap={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {favoriteArray.map((listItem) => {
            return (
              <FavoriteCardItem
                channelTitle={listItem.channelTitle}
                playListThumbnail={listItem.playListThumbnail}
                playListTitle={listItem.playListTitle}
                playlistId={listItem.playListId}
                key={listItem.playListId}
              />
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default FavoriteItems;
