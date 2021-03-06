/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import exhibitComponentEditor from '../../modules/exhibit-component-editor.js';

export default class ExhibitComponentEditor extends React.Component {
  componentDidMount() {
    exhibitComponentEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }

  render() {
    const { exhibitComponent } = this.props;

    return (<form
      ref={ form => (this.exhibitComponentEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Component Number</ControlLabel>
        <FormControl
          type="text"
          name="componentNumber"
          defaultValue={ exhibitComponent && exhibitComponent.componentNumber }
          placeholder="0000"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          name="title"
          defaultValue={ exhibitComponent && exhibitComponent.title }
          placeholder="Component short description"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { exhibitComponent && exhibitComponent._id ? 'Save Changes' : 'Add Exhibit Component' }
      </Button>
    </form>);
  }
}

ExhibitComponentEditor.propTypes = {
  exhibitComponent: React.PropTypes.object,
};
