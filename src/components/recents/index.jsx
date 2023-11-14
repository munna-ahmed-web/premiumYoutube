import { useStoreState } from "easy-peasy";
import { v4 as uuidv4 } from "uuid";
import RecentFavourite from "../playListDetails/RecentFavourite";

const RecentsPlaylist = () => {
  const {
    playlist: { data },
    recents: { items },
  } = useStoreState((store) => store);
  const playListArray = [];
  const playLists = Object.values(data);

  items.forEach((id) => {
    playLists.forEach((singlelist) => {
      if (singlelist.playListId == id) {
        playListArray.push(singlelist);
      }
    });
  });

  return (
    <div>
      <h4 className="mainPlTitle">Recent Playlists</h4>
      {playListArray.length > 0 && (
        <>
          {playListArray.map((item) => {
            return (
              <RecentFavourite
                key={uuidv4()}
                playListTitle={item.playListTitle}
                playlistId={item.playListId}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default RecentsPlaylist;
