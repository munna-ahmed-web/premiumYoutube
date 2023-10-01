import axios from "axios";
// const key = import.meta.env.VITE_YOUTUBE_API_KEY;
const key = "AIzaSyCaNFdRyXlEDOtNQLhyUiuSeJ7UCUgQpZc";

const getPlayListItem = async (playListId, pageToken = "", result = []) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=id,contentDetails,snippet&key=${key}&playlistId=${playListId}&maxResults=50&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);

  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = getPlayListItem(playListId, data.nextPageToken, result);
  }

  return result;
};

const getPlayList = async (playListId) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlists?key=${key}&part=snippet&id=${playListId}`;

  const { data } = await axios.get(URL);
  let playlistItems = await getPlayListItem(playListId);

  const {
    channelId,
    title: playListTitle,
    description: playListDescription,
    thumbnails,
    channelTitle
  } = data?.items[0]?.snippet;

  playlistItems = playlistItems.map((item) => {
    const {
      title,
      description,
      thumbnails: { medium },
    } = item.snippet;

    return {
      title,
      description,
      thumbnail: medium,
      contentDetails: item.contentDetails,
    };
  });


  return{
    playListId,
    playListTitle,
    playListDescription,
    playListThumbnail : thumbnails.default,
    channelId,
    channelTitle,
    playlistItems
  }


};

export default getPlayList;
