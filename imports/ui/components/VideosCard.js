import React from 'react';
import _ from 'lodash';
import Modal from '/node_modules/react-overlays/lib/Modal';

let VelocityComponent = require('/node_modules/velocity-react/velocity-component');

class VideoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: props.video,
      active: 'False',
    };
  }

  handleVideoSelect(e) {
    // Animate state of the clicked button
    this.setState({ active: 'True' });

    // Send parent component the video launch event
    this.props.launchVideoPlayer(e);
  }

  render() {
    const { video } = this.props;
    const paddedVideoNumber = _.padStart(video.videoNumber, 2, '0');
    const buttonImagePath = `/media/${video.componentNumber}/${paddedVideoNumber}.png`;

    const cardClass = () => {
      if (this.state.active === 'False') {
        return 'video-button inactive';
      } else {
        return 'video-button active';
      }
    };

    return (
      <div
        onClick={this.handleVideoSelect.bind(this)}
        className={cardClass()}
        id={`video-${paddedVideoNumber}`}
      >
        <img src={buttonImagePath}/>
        <h2>
          <div className="en">{video.questionEn}</div>
          <div className="es">{video.questionEs}</div>
        </h2>
      </div>
    );
  }

}

VideoCard.propTypes = {
  video: React.PropTypes.object,
  launchVideoPlayer: React.PropTypes.func,
};

export default VideoCard;
