import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('welcome', { path: '/' });
  this.route('render-file-locations');
  this.route('toggle-panel');
  this.route('schedule');
  this.route('sort-songs');
});

export default Router;
