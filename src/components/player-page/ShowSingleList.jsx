import { List, ListItem } from "@mui/material";
import Button from "@mui/material/Button";
 
 const ShowSingleList = ({ videoInfo, getVideoId }) => {
   const {
     title,
     contentDetails: { videoId },
   } = videoInfo;

   return (
     <>
       <>
         <ListItem> <Button variant="outlined" onClick={()=>getVideoId(videoId)} sx={{color:'black', padding:'3px'}}  >{title}</Button> </ListItem>
       </>
     </>
   );
 };
 
 export default ShowSingleList