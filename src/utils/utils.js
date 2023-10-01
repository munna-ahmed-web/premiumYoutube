function extractPlaylistId(youtubeLink) {
  // Regular expression to match YouTube playlist URLs
  const playlistRegex = /list=([a-zA-Z0-9_-]+)/;

  // Check if the link contains a playlist parameter
  const match = youtubeLink.match(playlistRegex);

  // If there is a match, return the playlist ID
  if (match && match[1]) {
    return match[1];
  } else {
    return null; // No playlist ID found in the link
  }
}


export default extractPlaylistId;