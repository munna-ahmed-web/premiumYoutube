
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import {Link} from 'react-router-dom'
import Card from "@mui/material/Card";
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
    <Card sx={{ width: 257, height: 400 }}>
      <CardMedia
        component="img"
        image={playListThumbnail.url}
        alt="Play List Title"
      />
      <CardContent>
        <Typography variant="subtitle1" color="text.primary">
          {`${
            playListTitle.length > 50
              ? playListTitle.substr(0, 50) + "..."
              : playListTitle
          }`}
        </Typography>
        <Typography variant="caption" color="text.secomdary">
          {channelTitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button to={`/player/${playlistId}`} component={Link}>
          <Stack>
            <PlayCircleOutline />
          </Stack>
          <Typography variant="subtitle1" sx={{ ml: "5px" }}>
            Start Tutorial
          </Typography>
        </Button>
      </CardActions>
      <Button onClick={() => handleFavorites(playlistId)}>
        <Stack>
          <FavoriteIcon />
        </Stack>
        <Typography variant="subtitle1" sx={{ ml: "5px" }}>
          Add to Favorites
        </Typography>
      </Button>
      <Button onClick={() => handleDeletePlaylist(playlistId)}>
        <DeleteIcon />
      </Button>
    </Card>
  );
};


export default PlayListCardItem;