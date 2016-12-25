import React from 'react';
import VideoEditor from '../components/VideoEditor';

const EditVideo = ({ exhibitComponents, video }) => (
  <div className="EditVideo">
    <h4 className="page-header">Editing "{ video.questionEn }"</h4>
    <VideoEditor components={ exhibitComponents } video={ video } />
  </div>
);

EditVideo.propTypes = {
  exhibitComponents: React.PropTypes.object,
  video: React.PropTypes.object,
};

export default EditVideo;
