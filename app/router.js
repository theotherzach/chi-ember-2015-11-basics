import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('welcome', { path: '/' });
  this.route('render-file-locations');
});

export default Router;
