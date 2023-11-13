
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
          <Button to={`/player/${playlistId}`} component={Link}>
            <PlayCircleOutline />
          </Button>

          <Button onClick={() => handleFavorites(playlistId)}>
            <FavoriteIcon />
          </Button>

          <Button onClick={() => handleDeletePlaylist(playlistId)}>
            <DeleteIcon />
          </Button>
        </>
      </div>
    </div>
  );
};


export default PlayListCardItem;