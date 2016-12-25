/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.js';

import ExhibitComponents from '../../ui/pages/ExhibitComponents.js';
import NewExhibitComponent from '../../ui/pages/NewExhibitComponent.js';
import ViewExhibitComponent from '../../ui/containers/ViewExhibitComponent.js';

import Videos from '../../ui/pages/Videos.js';
import NewVideo from '../../ui/containers/VideoCreateContainer';
import ViewVideo from '../../ui/containers/ViewVideo.js';

import Documents from '../../ui/pages/Documents.js';
import NewDocument from '../../ui/pages/NewDocument.js';
import EditDocument from '../../ui/containers/EditDocument.js';
import ViewDocument from '../../ui/containers/ViewDocument.js';

import Index from '../../ui/pages/Index.js';
import Login from '../../ui/pages/Login.js';
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';
import Signup from '../../ui/pages/Signup.js';

//noinspection Eslint
/**
 * Authenticate is disabled right now
 *
 * TODO: Enable if you want to add in authentication in the future.
 * For now leave it here.
 */
const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />

        {/* Exhibit Components */}
        <Route name="exhibitComponents" path="/components" component={ ExhibitComponents } />
        <Route
          name="newExhibitComponents" path="/components/new"
          component={ NewExhibitComponent }
        />
        <Route
          name="viewExhibitComponent" path="/components/:componentNumber"
          component={ ViewExhibitComponent }
        />

        {/* Videos */}
        <Route name="videos" path="/videos" component={ Videos } />
        <Route name="newVideo" path="/video/new" component={ NewVideo } />
        <Route
          name="viewVideo" path="/componentNumber/video/:videoNumber"
          component={ ViewVideo }
        />

        {/* Documents */}
        <Route name="documents" path="/documents" component={ Documents } />
        <Route name="newDocument" path="/documents/new" component={ NewDocument } />
        <Route name="editDocument" path="/documents/:_id/edit" component={ EditDocument } />
        <Route name="viewDocument" path="/documents/:_id" component={ ViewDocument } />

        {/* Authentication */}
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
