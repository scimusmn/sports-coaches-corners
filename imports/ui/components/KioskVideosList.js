import React from 'react';
import _ from 'lodash';
import Modal from '/node_modules/react-overlays/lib/Modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
      selectedVideo: '0',
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
    console.log('----^ ^ ^ ^ ^ Clicked ^ ^ ^ ^ ^----');
    this.setState({ playing: false });
  }

  render() {

    /**
     * Loop through the videos and render a card for each question
     */
    const videoCards = this.props.videos.map((video) =>
      <VideoCard
        launchVideoPlayer={this.launchVideoPlayer.bind(this)}
        playing={this.state.playing}
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
        {
          this.state.playing
            ?
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}>
              <VideoPlayer
                videoPlaying={this.state.playing}
                handleHomeAction={this.closeModal.bind(this)}
                componentNumber={this.state.componentNumber}
                selectedVideo={this.state.selectedVideo}
              />
            </ReactCSSTransitionGroup>
            : null
        }

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
