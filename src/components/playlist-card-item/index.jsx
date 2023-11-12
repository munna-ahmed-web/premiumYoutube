
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
      {/* <CardMedia
        component="img"
        image={playListThumbnail.url}
        alt="Play List Title"
      /> */}
      <div>
        <p>
          {`${
            playListTitle.length > 50
              ? playListTitle.substr(0, 50) + "..."
              : playListTitle
          }`}
        </p>
        <p>{channelTitle}</p>
      </div>

      <div>
        <Button to={`/player/${playlistId}`} component={Link}>
          <div>
            <PlayCircleOutline />
          </div>
          <p>Start Tutorial</p>
        </Button>
      </div>

      <div>
        <Button onClick={() => handleFavorites(playlistId)}>
          <>
            <FavoriteIcon />
          </>
          <p>Add to Favorites</p>
        </Button>
        <Button onClick={() => handleDeletePlaylist(playlistId)}>
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};


export default PlayListCardItem;