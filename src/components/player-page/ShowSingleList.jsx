import { List, ListItem } from "@mui/material";
import Button from "@mui/material/Button";
 
 const ShowSingleList = ({ videoInfo, getVideoId }) => {
   const {
     title,
     contentDetails: { videoId },
   } = videoInfo;

   return (
     <div>
       <List>
         <ListItem> <Button variant="outlined" onClick={()=>getVideoId(videoId)} sx={{color:'black'}}  >{title}</Button> </ListItem>
       </List>
     </div>
   );
 };
 
 export default ShowSingleList