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
      <div className="videoCard" key={video._id}>
        {video.questionEn}<br/>
        {video.questionEs}
      </div>
    );

    return (
      <div>
          {videoCards}
      </div>
    );
  }

}

KioskVideoList.propTypes = {
  videos: React.PropTypes.array,
};

export default KioskVideoList;
