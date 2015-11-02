import Ember from 'ember';

export default Ember.Controller.extend({
  isSectionVisible: true,

  actions: {
    showLess: function () {
      this.set('isSectionVisible', false);
    },

    showMore: function () {
      this.set('isSectionVisible', true);
    }
  }
});
