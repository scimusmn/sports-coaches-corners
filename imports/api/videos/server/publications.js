import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Videos from '../videos';
import ExhibitComponents from '../../exhibitComponents/exhibitComponents';

Meteor.publish('videos.list', () => [ExhibitComponents.find(), Videos.find()]);

Meteor.publish('video.view', (componentNumber, videoNumber) => {
  check(componentNumber, String);
  /**
   * TODO: Cleanup the video number type
   *
   * We're passing around a string and expect a int in Mongo.
   */
  check(videoNumber, Number);
  return Videos.find({ $and: [{ componentNumber }, { videoNumber }] });
});
