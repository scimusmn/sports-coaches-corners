import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Videos from '../../api/videos/videos';
import ViewVideo from '../pages/ViewVideo';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('video.view', params.componentNumber);

  if (subscription.ready()) {
    const video = Videos.findOne();
    onData(null, { video });
  }
};

export default composeWithTracker(composer, Loading)(ViewVideo);
