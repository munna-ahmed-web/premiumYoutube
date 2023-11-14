
import YouTube from "react-youtube";

const ReactYTPlayer = ({ vDetails }) => {
    const {
      contentDetails: { videoId },
      title
    } = vDetails;
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };

  return (
    <div>
      <h4>{title}</h4>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default ReactYTPlayer;