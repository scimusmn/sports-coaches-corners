import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Videos from '../../api/videos/videos.js';
import KioskVideosList from '../components/KioskVideosList';
import Loading from '../components/Loading.js';

const composer = ({ params }, onData) => {
  const subscription = Meteor.subscribe('videos.kioskView', params.componentNumber);

  if (subscription.ready()) {
    const videos = Videos.find().fetch();
    onData(null, { videos });
  }
};

export default composeWithTracker(composer, Loading)(KioskVideosList);
