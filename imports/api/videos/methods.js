import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Videos from './videos';
import rateLimit from '../../modules/rate-limit.js';

export const upsertVideos = new ValidatedMethod({
  name: 'videos.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    componentNumber: { type: String, optional: true },
    questionEn: { type: String, optional: true },
    questionEs: { type: String, optional: true },
    videoNum: { type: Number, optional: true },
  }).validator(),
  run(document) {
    return Videos.upsert({ _id: document._id }, { $set: document });
  },
});

export const removeVideos = new ValidatedMethod({
  name: 'videos.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Videos.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertVideos,
    removeVideos,
  ],
  limit: 5,
  timeRange: 1000,
});
