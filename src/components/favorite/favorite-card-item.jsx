import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";



const FavoriteCardItem = ({
  playListThumbnail,
  playListTitle,
  channelTitle,
  playlistId,
}) => {
  return (
    <Card sx={{ width: 257, height: 350 }}>
      <CardMedia
        component="img"
        image={playListThumbnail.url}
        alt="Play List Title"
      />
      <CardContent>
        <Typography variant="subtitle1" color="text.primary">
          {`${
            playListTitle.length > 30
              ? playListTitle.substr(0, 30) + "..."
              : playListTitle
          }`}
        </Typography>
        <Typography variant="caption" color="text.secomdary">
          {channelTitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          to={`/player/${playlistId}`}
          component={Link}
        >
          <Stack>
            <PlayCircleOutline />
          </Stack>
          <Typography variant="subtitle1">Start Tutorial</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default FavoriteCardItem;
