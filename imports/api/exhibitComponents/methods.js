import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import ExhibitComponents from './exhibitComponents';
import rateLimit from '../../modules/rate-limit.js';

export const upsertExhibitComponents = new ValidatedMethod({
  name: 'exhibitComponents.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    componentNumber: { type: String, optional: true },
  }).validator(),
  run(document) {
    return ExhibitComponents.upsert({ _id: exhibitComponent._id }, { $set: document });
  },
});

export const removeExhibitComponents = new ValidatedMethod({
  name: 'exhibitComponents.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    ExhibitComponents.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertExhibitComponents,
    removeExhibitComponents,
  ],
  limit: 5,
  timeRange: 1000,
});