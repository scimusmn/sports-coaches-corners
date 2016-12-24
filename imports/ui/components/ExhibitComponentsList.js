import React from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const ExhibitComponentsList = ({ exhibitComponents }) => (
  exhibitComponents.length > 0 ? <ListGroup className="DocumentsList">
    {exhibitComponents.map(({ _id, title, componentNumber }) => (
      <ListGroupItem
        key={ _id }
        href={`/components/${componentNumber}`}>
        { componentNumber } - { title }
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No exhibit components yet.</Alert>
);

ExhibitComponentsList.propTypes = {
  exhibitComponents: React.PropTypes.array,
};

export default ExhibitComponentsList;
