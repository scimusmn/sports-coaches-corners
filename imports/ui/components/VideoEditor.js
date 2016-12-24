/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import videoEditor from '../../modules/video-editor.js';

export default class VideoEditor extends React.Component {
  componentDidMount() {
    videoEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="componentNumber"]').focus(); }, 0);
  }

  render() {
    const { video } = this.props;
    return (<form
      ref={ form => (this.videoEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Component Number</ControlLabel>
        <FormControl
          type="text"
          name="componentNumber"
          defaultValue={ video && video.componentNumber }
          placeholder="0000"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Question</ControlLabel>
        <FormControl
          type="text"
          name="questionEn"
          defaultValue={ video && video.questionEn }
          placeholder="Question title in English"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Spanish question</ControlLabel>
        <FormControl
          type="text"
          name="questionEs"
          defaultValue={ video && video.questionEs }
          placeholder="Question title in Spanish"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { video && video._id ? 'Save Changes' : 'Add Video' }
      </Button>
    </form>);
  }
}

VideoEditor.propTypes = {
  video: React.PropTypes.object,
};
