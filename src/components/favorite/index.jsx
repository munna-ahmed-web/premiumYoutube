import { useStoreState } from "easy-peasy";
import RecentFavourite from "../playListDetails/RecentFavourite";


const FavoriteItems = () => {
  const {
    favorites: { items },
    playlist: { data },
  } = useStoreState((state) => state);

  const favoriteArray = [];
  const playlistArrayFromApi = Object.values(data);

  items.forEach((id) => {
    playlistArrayFromApi.forEach((singlePlaylist) => {
      if (singlePlaylist.playListId == id) {
        favoriteArray.push(singlePlaylist);
      }
    });
  });

  return (
    <div>
      <p>Favorite Playlists</p>
      <hr />
      {favoriteArray.length > 0 && (
        <div>
          {favoriteArray.map((listItem) => {
            return (
              <RecentFavourite
                key={listItem.playListId}
                playListTitle={listItem.playListTitle}
                playlistId={listItem.playListId}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FavoriteItems;
