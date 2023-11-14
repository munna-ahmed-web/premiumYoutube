import PlayListCardItem from "../playlist-card-item";
import { useStoreState } from "easy-peasy";
import RecentsPlaylist from "../recents";
import FavoriteItems from "../favorite";
import { useState } from "react";
import Pagination from "../pagination/Pagination";

const HomePage = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(6);
  const {
    playlist: { data },
    recents,
    favorites,
  } = useStoreState((store) => store);

  const totalPlayLists = Object.values(data);

  //Another Component*******************************************************
  let recentsCom;
  if (data && recents.items) {
    recentsCom = <RecentsPlaylist />;
  }

  let favoriteCom;
  if (data && favorites.items) {
    favoriteCom = <FavoriteItems />;
  }
  //Another Component*******************************************************

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const playListArray = totalPlayLists.slice(firstIndex, lastIndex);
  return (
    <div className="container">
      <div className="container1">
        <h2 className="mainPlTitle">PlayLists</h2>
        {playListArray.length > 0 ? (
          <div className="cardContainer">
            <>
              {playListArray.map((item) => {
                return (
                  <PlayListCardItem
                    key={item.playListId}
                    playListThumbnail={item.playListThumbnail}
                    playListTitle={item.playListTitle}
                    channelTitle={item.channelTitle}
                    playlistId={item.playListId}
                  />
                );
              })}
            </>
          </div>
        ) : (
          <h4>Playlists are not available. Click above to add playlist.</h4>
        )}

        <Pagination
          postPerPage={postPerPage}
          totalPost={totalPlayLists.length}
          setcurrentPage={setcurrentPage}
          currentPage={currentPage}
        />
      </div>
      <div className="Container2">
        <div>{recentsCom}</div>
        <div>{favoriteCom}</div>
      </div>
    </div>
  );
};

export default HomePage;
