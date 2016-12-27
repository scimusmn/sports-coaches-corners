import React from 'react';
import VideoHomeButton from './VideoHomeButton';

class VideoPlayer extends React.Component {

  render() {
    const selectedVideo = () => this.props.selectedVideo.replace('video-', '');

    return (
      <div className="video-player">

        <video muted autoPlay>
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
  handleHomeAction: React.PropTypes.func,
  componentNumber: React.PropTypes.string,
  selectedVideo: React.PropTypes.string,
};

export default VideoPlayer;
