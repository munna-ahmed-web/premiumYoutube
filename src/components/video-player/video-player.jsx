
import YouTube from "react-youtube";

const ReactYTPlayer = ({ vDetails }) => {
    const {
      contentDetails: { videoId, videoPublishedAt },
      title,
      description,
    } = vDetails;

    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };

    const utcDate = new Date(videoPublishedAt);

  return (
    <div>
      <h4>{title}</h4>
      <YouTube videoId={videoId} opts={opts} />
      <h4> Published at: {utcDate.toLocaleString()}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ReactYTPlayer;