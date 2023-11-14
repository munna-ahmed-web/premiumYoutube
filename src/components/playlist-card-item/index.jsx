
import { Button } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import {Link} from 'react-router-dom'
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useStoreActions} from 'easy-peasy'
import DeleteIcon from "@mui/icons-material/Delete";




const PlayListCardItem = ({
  playListThumbnail,
  playListTitle,
  channelTitle,
  playlistId,
}) => {

  const { playlist, favorites, recents } = useStoreActions((action) => action);
  const handleFavorites = (id) =>{
    favorites.addToFavorite(id);
    
  }

  const handleDeletePlaylist = (id) =>{
    playlist.deletePlayList(id)
  }

  return (
    <div className="playListCard">
      <div className="imageSection">
        <img src={playListThumbnail.url} alt={playListTitle} />
      </div>

      <div className="detailsSection">
        <p>
          {`${
            playListTitle.length > 50
              ? playListTitle.substr(0, 50) + "..."
              : playListTitle
          }`}
        </p>
      </div>

      <div className="actionSection">
        <>
          <Button
            to={`/player/${playlistId}`}
            component={Link}
            variant="outlined"
            sx={{ margin: "1px" }}
          >
            <PlayCircleOutline />
          </Button>

          <Button
            onClick={() => handleFavorites(playlistId)}
            variant="outlined"
            sx={{ margin: "1px" }}
          >
            <FavoriteIcon />
          </Button>

          <Button
            onClick={() => handleDeletePlaylist(playlistId)}
            color="warning"
            variant="outlined"
            sx={{ margin: "1px" }}
          >
            <DeleteIcon />
          </Button>
        </>
      </div>
    </div>
  );
};


export default PlayListCardItem;