import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('about');
  this.route('contact', function(){
    this.route('boston');
    this.route('nyc');
  });
    this.route('team', function(){
    this.route('engineering');
    this.route('leadership');
  });
});

export default Router;
