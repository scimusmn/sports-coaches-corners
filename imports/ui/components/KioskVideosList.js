import React from 'react';
import _ from 'lodash';

class KioskVideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: props.videos,
      playing: props.playing,
    };
  }

  handleVideoClick(e) {
    this.setState({
      playing: 'True',
    });
  }

  render() {
    const videos = this.props.videos;
    const videoCards = videos.map((video) =>
      <VideoCard
        handleVideoClick={this.handleVideoClick.bind(this)}
        key={video._id}
        video={video}/>
    );
    return (
      <div key="unique" id="selection-screen">
        <h1>
          <div className="en">Select a question to learn more.</div>
          <div className="es">Elige una pregunta para aprender más.</div>
        </h1>
        {videoCards}
      </div>
    );
  }

}

KioskVideoList.propTypes = {
  videos: React.PropTypes.array,
  playing: React.PropTypes.string,
};

class VideoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: props.video,
      active: 'False',
    };
  }

  handleClick(e) {
    this.setState({ active: 'True' });
    this.props.handleVideoClick(e);
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
        onClick={this.handleClick.bind(this)}
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
  handleVideoClick: React.PropTypes.func,
};

export default KioskVideoList;
