import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Videos from '../videos';

Meteor.publish('video.list', () => Videos.find());

Meteor.publish('video.view', (componentNumber, videoNum) => {
  check(componentNumber, String);
  check(videoNum, Number);
  return Videos.find({ $and: [{ componentNumber }, { videoNum }] });
});
