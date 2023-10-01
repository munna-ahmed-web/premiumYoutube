
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useStoreActions } from 'easy-peasy'
import extractPlaylistId from "../../utils/utils";

const PlaylistForm = ({open, handleClose}) => {

    const { getPlayList } = useStoreActions((action) => action.playlist);
    const [state, setState] = useState('')

    const handleSubmit = () =>{
      if(!state){
        alert('Invalid State')
      }else{
        const firstTwo = state.slice(0, 2);
        if (firstTwo == "PL"){
          getPlayList(state);
        }else{
          getPlayList(extractPlaylistId(state));
        } 
        setState('')
        handleClose()
      }
    }

    
  

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Playlist</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new playlist please insert the playlist id or link. Pleae
          make sure the link is correct. Otherwise you won't able to fetch the
          playlist information.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Playlist id or link"
          fullWidth
          variant="standard"
          onChange={(e) => setState(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add Playlist</Button>
      </DialogActions>
    </Dialog>
  );
}


export default PlaylistForm;