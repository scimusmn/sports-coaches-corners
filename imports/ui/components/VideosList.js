import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const VideosList = ({ videos }) => (
  videos.length > 0 ? <ListGroup className="VideosList">
    {videos.map(({ _id, componentNumber, questionEn, questionEs, videoNum }) => (
      <ListGroupItem
        key={ _id }
        href={`/videos/${videoNum}`}>
        { componentNumber } - { videoNum } - { questionEn } - { questionEs }
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No videos yet.</Alert>
);

VideosList.propTypes = {
  videos: React.PropTypes.array,
};

export default VideosList;
