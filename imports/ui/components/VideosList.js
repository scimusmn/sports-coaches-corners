import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const VideosList = ({ videos }) => (
  videos.length > 0 ? <ListGroup className="VideosList">
    {videos.map(({ _id, componentNumber, questionEn, questionEs, videoNumber }) => (
      <ListGroupItem
        key={ _id }
        href={`/videos/${videoNumber}`}>
        { componentNumber } - { videoNumber } - { questionEn } - { questionEs }
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No videos yet.</Alert>
);

VideosList.propTypes = {
  videos: React.PropTypes.array,
};

export default VideosList;
