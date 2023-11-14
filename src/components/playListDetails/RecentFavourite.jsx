import { Link } from "react-router-dom";
import { Button, List, ListItem  } from "@mui/material";


const RecentFavourite = ({ playListTitle, playlistId }) => {
  return (
      <>
        <List sx={{padding: "0"}}>
          <ListItem>
            <Button
              to={`/player/${playlistId}`}
              component={Link}
              sx={{
                color: "black",
                border: "1px solid black",
                width: "100%",
                padding: "0",
              }}
            >
              {playListTitle}
            </Button>
          </ListItem>
        </List>
      </>
  );
};

export default RecentFavourite;
