import React from 'react';

class KioskVideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: props.videos,
    };
  }

  render() {
    const videos = this.props.videos;
    const videoCards = videos.map((video) =>
      <li key={video._id}>{video.videoNumber} - {video.questionEn} - {video.questionEs}</li>
    );

    return (
      <div>
        <ul>
          {videoCards}
        </ul>
      </div>
    );
  }

}

KioskVideoList.propTypes = {
  videos: React.PropTypes.array,
};

export default KioskVideoList;
