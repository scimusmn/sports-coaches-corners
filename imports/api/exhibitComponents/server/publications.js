import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import ExhibitComponents from '../exhibitComponents';

Meteor.publish('exhibitComponents.list', () => ExhibitComponents.find());

Meteor.publish('exhibitComponents.view', (_id) => {
  check(_id, String);
  return ExhibitComponents.find(_id);
});
