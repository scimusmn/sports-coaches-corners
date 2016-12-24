/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertVideo } from '../api/videos/methods.js';
import './validation.js';

let component;

const handleVideoUpsert = () => {
  const { Video } = component.props;
  const confirmation = Video && Video._id ? 'Video updated!' : 'Video added!';
  const upsert = {
    componentNumber: document.querySelector('[name="componentNumber"]').value.trim(),
    questionEn: document.querySelector('[name="questionEn"]').value.trim(),
    questionEs: document.querySelector('[name="questionEs"]').value.trim(),
  };

  if (Video && Video._id) upsert._id = Video._id;

  upsertVideo.call(upsert, (error, { insertedId }) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.VideoEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/components/${insertedId || Video._id}`);
    }
  });
};

const requiredMessage = (element) => `Please enter a ${element}. It is required.`;

const validate = () => {
  $(component.VideoEditorForm).validate({
    rules: {
      componentNumber: {
        required: true,
      },
      questionEn: {
        required: true,
      },
      questionEs: {
        required: true,
      },
      videoNum: {
        required: true,
      },
    },
    messages: {
      componentNumber: {
        required: requiredMessage('component number'),
      },
      questionEn: {
        required: requiredMessage('English question'),
      },
      questionEs: {
        required: requiredMessage('Spanish question'),
      },
    },
    submitHandler() { handleVideoUpsert(); },
  });
};

export default function VideoEditor(options) {
  component = options.component;
  validate();
}
