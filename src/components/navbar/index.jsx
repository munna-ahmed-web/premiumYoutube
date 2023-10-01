
import AppBar from "@mui/material/AppBar";
import {Link as RouterLink} from 'react-router-dom'
import Link from '@mui/material/Link'
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Container, Stack } from "@mui/material";
import { useState } from "react";
import PlaylistForm from "../playlist-form";


const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{ py: 1 }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                component={RouterLink}
                sx={{ textDecoration: "none", color: "black" }}
              >
                <Typography variant="h5">Premium Youtube</Typography>
              </Link>
                <Typography variant="body1">By Munna Ahmed</Typography>
            </Stack>
            <Button onClick={handleClickOpen} variant="contained">
              Add Playlist{" "}
            </Button>
            <PlaylistForm
              open={open}
              handleClose={handleClose}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};


export default NavBar