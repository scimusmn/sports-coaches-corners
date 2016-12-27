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
      <div className="video-player">Test</div>
    );
  }

}

VideoPlayer.propTypes = {
  video: React.PropTypes.object,
  active: React.PropTypes.string,
};

export default VideoPlayer;
