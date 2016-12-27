import React from 'react';

class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      video: props.video,
      active: 'False',
    };
  }

  render() {
    const video = this.props.video;
    const selectedVideo = () => this.props.selectedVideo.replace('video-', '');

    return (
      <div onClick={this.props.handleHomeClick.bind(this)} className="video-player">
        <video autoPlay>
          <source
            src={`/media/${this.props.componentNumber}/${selectedVideo()}.mp4`}
            type="video/mp4"
          />
        </video>
        <div className="home-button">
          <img src="/images/home.png" />
        </div>
      </div>
    );
  }

}

VideoPlayer.propTypes = {
  video: React.PropTypes.object,
  active: React.PropTypes.string,
  handleHomeClick: React.PropTypes.func,
  componentNumber: React.PropTypes.string,
  selectedVideo: React.PropTypes.string,
};

export default VideoPlayer;
