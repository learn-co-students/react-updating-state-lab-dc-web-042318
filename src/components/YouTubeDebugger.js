import React from "react";

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: "1080p" } }
    };
  }

  bitClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  resClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.bitClick} className="bitrate">
          Bitrate
        </button>
        <button onClick={this.resClick} className="resolution">
          Resolution
        </button>
      </div>
    );
  }
}
