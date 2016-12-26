import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import ExhibitComponents from '/imports/api/exhibitComponents/exhibitComponents';
import Videos from '/imports/api/videos/videos';

const users = [
  {
    email: 'admin@admin.com',
    password: 'password',
    profile: {
      name: { first: 'Carl', last: 'Winslow' },
    },
    roles: ['admin'],
  },
];

users.forEach(({ email, password, profile, roles }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {
    const userId = Accounts.createUser({ email, password, profile });
    Roles.addUsersToRoles(userId, roles);
  }
});

/**
 * Populate content after reset
 */

/**
 * Import Exhibit Components
 */
if (ExhibitComponents.find().count() === 0) {
  const exhibitComponentData = JSON.parse(Assets.getText('exhibitComponents.json'));
  exhibitComponentData.forEach((item) => {
    ExhibitComponents.insert(item);
  });
}

/**
 * Import videos
 */
if (Videos.find().count() === 0) {
  const videoData = JSON.parse(Assets.getText('videos.json'));
  videoData.forEach((item) => {
    Videos.insert(item);
  });
}
