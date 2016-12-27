import React from 'react';
import _ from 'lodash';
import Modal from '/node_modules/react-overlays/lib/Modal';
import VideoCard from './VideosCard';

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
    const videos = this.props.videos;

    const dialogStyle = function() {
      // we use some psuedo random coords so nested modals
      // don't sit right on top of each other.
      let top = 50 + rand();
      let left = 50 + rand();

      return {
        position: 'absolute',
        width: 400,
        top: top + '%', left: left + '%',
        transform: `translate(-${top}%, -${left}%)`,
        border: '1px solid #e5e5e5',
        backgroundColor: 'white',
        boxShadow: '0 5px 15px rgba(0,0,0,.5)',
        padding: 20
      };
    };

    const modalStyle = {
      position: 'fixed',
      zIndex: 1040,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };
    const backdropStyle = {
      ...modalStyle,
      zIndex: 'auto',
      backgroundColor: '#000',
      opacity: 0.5,
    };
    const videoCards = videos.map((video) =>
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
          aria-labelledby='modal-label'
          style={modalStyle}
          backdropStyle={backdropStyle}
          show={this.state.showModal}
          onHide={this.close.bind(this)}
        >
          <div style={dialogStyle()} >
            Video player here
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
