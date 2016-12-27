import React from 'react';
import _ from 'lodash';
import Modal from '/node_modules/react-overlays/lib/Modal';
import VideoCard from './VideosCard';
import VideoPlayer from './VideoPlayer';

let VelocityComponent = require('/node_modules/velocity-react/velocity-component');

class KioskVideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: props.videos,
      playing: props.playing,
      componentNumber: props.componentNumber,
      selectedVideo: null,
      showVideo: false,
    };
  }

  launchVideoPlayer(e) {
    this.setState({
      playing: true,
      selectedVideo: e.currentTarget.id,
      showVideo: true,
    });
  }

  closeModal(e) {
    this.setState({ showVideo: false });
  }

  render() {
    const modalStyle = {
      position: 'fixed',
      zIndex: 1040,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };

    /**
     * Loop through the videos and render a card for each question
     */
    const videoCards = this.props.videos.map((video) =>
      <VideoCard
        launchVideoPlayer={this.launchVideoPlayer.bind(this)}
        key={video._id}
        video={video}
      />
    );

    return (
      <div key="unique" id="selection-screen">

        {/* Coaches Corner headline title */}
        <h1>
          <div className="en">Select a question to learn more.</div>
          <div className="es">Elige una pregunta para aprender más.</div>
        </h1>

        {/* Question buttons */}
        {videoCards}

        {/* Modal video player */}
        <Modal
          style={modalStyle}
          show={this.state.showVideo}
        >
          <div>
            <VideoPlayer
              handleHomeAction={this.closeModal.bind(this)}
              componentNumber={this.state.componentNumber}
              selectedVideo={this.state.selectedVideo}
            />
          </div>

        </Modal>

      </div>
    );
  }

}

KioskVideoList.propTypes = {
  videos: React.PropTypes.array,
  playing: React.PropTypes.bool,
  componentNumber: React.PropTypes.string,
  playingVideo: React.PropTypes.string,
};

export default KioskVideoList;
