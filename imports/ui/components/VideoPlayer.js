import React from 'react';
import VideoHomeButton from './VideoHomeButton';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPlaying: props.videoPlaying,
    };
  }

  render() {
    const selectedVideo = () => this.props.selectedVideo.replace('video-', '');

    return (

      <div className="video-player">

        <video
          onEnded={this.props.handleHomeAction.bind(this)}
          autoPlay="autoplay"
        >
          <source
            src={`/media/${this.props.componentNumber}/${selectedVideo()}.mp4`}
            type="video/mp4"
          />
        </video>

        <VideoHomeButton
          homeAction={this.props.handleHomeAction.bind(this)}
        />

      </div>
    );
  }

}

VideoPlayer.propTypes = {
  videoPlaying: React.PropTypes.bool,
  handleHomeAction: React.PropTypes.func,
  componentNumber: React.PropTypes.string,
  selectedVideo: React.PropTypes.string,
};

export default VideoPlayer;
