import React from 'react';
import _ from 'lodash';
import Modal from '/node_modules/react-overlays/lib/Modal';
import VideoCard from './VideosCard';
import VideoPlayer from './VideoPlayer';

let VelocityComponent = require('/node_modules/velocity-react/velocity-component');

let rand = ()=> (Math.floor(Math.random() * 20) - 10);

class KioskVideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: props.videos,
      playing: props.playing,
      playingVideo: null,
      showModal: false,
    };
  }

  handleVideoClick(e) {
    this.setState({
      playing: true,
      playingVideo: e.currentTarget.id,
      showModal: true,
    });
  }

  render() {
    const modalStyle = {
      position: 'fixed',
      zIndex: 1040,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: 'red',
    };

    /**
     * Loop through the videos and render a card for each question
     */
    const videoCards = this.props.videos.map((video) =>
      <VideoCard
        handleVideoClick={this.handleVideoClick.bind(this)}
        key={video._id}
        video={video}/>
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
          show={this.state.showModal}
          onHide={this.close.bind(this)}
        >
          <div>
            <VideoPlayer/>
          </div>
        </Modal>

      </div>
    );

  }

  close() {
    this.setState({ showModal: false });
  }

}

KioskVideoList.propTypes = {
  videos: React.PropTypes.array,
  playing: React.PropTypes.bool,
  playingVideo: React.PropTypes.string,
};

export default KioskVideoList;
