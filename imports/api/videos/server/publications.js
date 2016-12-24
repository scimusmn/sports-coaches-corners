import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Videos from '../videos';

Meteor.publish('videos.list', () => Videos.find());

Meteor.publish('video.view', (componentNumber, questionEn, questionEs, videoNumber) => {
  check(componentNumber, String);
  check(questionEn, Number);
  check(questionEs, String);
  check(videoNumber, Number);
  return Videos.find({ $and: [{ componentNumber }, { videoNumber }] });
});
