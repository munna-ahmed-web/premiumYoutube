import { useState } from "react";
import ShowSingleList from "./ShowSingleList";
import Pagination from "../pagination/Pagination";


const ShowVideoList = ({ singlePlaylist, getVideoId }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(5)

  const { playlistItems, playListTitle } = singlePlaylist;
   const allLists = playlistItems.filter((video) => {
    if (video.title != "Deleted video") {
      return video;
    }
  });

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const selectedList = allLists.slice(firstIndex, lastIndex)

  return (
    <div>
      <h4 style={{margin:"5px 5px"}} >{playListTitle}</h4>
      {selectedList &&
        selectedList.map((singleVideo) => (
          <ShowSingleList
            key={singleVideo.contentDetails.videoId}
            videoInfo={singleVideo}
            getVideoId={getVideoId}
          />
        ))}

      <Pagination
        postPerPage={postPerPage}
        totalPost={allLists.length}
        setcurrentPage={setcurrentPage}
      />
    </div>
  );
};

export default ShowVideoList