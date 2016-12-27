import React from 'react';

class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      video: props.video,
      active: 'False',
    };
  }

  handleHomeClick(e) {
    console.log(e);
    console.log('----^ ^ ^ ^ ^ e ^ ^ ^ ^ ^----');
    // this.setState({
    //   playing: false,
    //   showModal: false,
    // });
  }

  render() {
    return (
      <div onClick={this.handleHomeClick.bind(this)} className="video-player">
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
};

export default VideoPlayer;
