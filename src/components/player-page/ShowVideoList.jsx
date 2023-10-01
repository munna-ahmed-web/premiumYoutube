import ShowSingleList from "./ShowSingleList";


const ShowVideoList = ({ singlePlaylist, getVideoId }) => {
  const { playlistItems, playListTitle } = singlePlaylist;
  const selectedList = playlistItems.filter((video) => {
    if (video.title != "Deleted video") {
      return video;
    }
  });

  return (
    <div>
      {selectedList &&
        selectedList.map((singleVideo) => (
          <ShowSingleList
            key={singleVideo.contentDetails.videoId}
            videoInfo={singleVideo}
            getVideoId={getVideoId}
          />
        ))}
    </div>
  );
};

export default ShowVideoList