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
    return (
      <div onClick={this.props.handleHomeClick.bind(this)} className="video-player">
        <video autoPlay>
          <source src="example.mp4" type="video/mp4"/>
        </video>
        <div className="home-button">Home</div>
      </div>
    );
  }

}

VideoPlayer.propTypes = {
  video: React.PropTypes.object,
  active: React.PropTypes.string,
  handleHomeClick: React.PropTypes.func,
};

export default VideoPlayer;
