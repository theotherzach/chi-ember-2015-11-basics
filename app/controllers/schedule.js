import Ember from 'ember';

export default Ember.Controller.extend({
  times: ['1:00', '1:30', '2:00'],

  actions: {
    selectTime: function(time) {
      this.set('scheduledTime', time);
    },

    resetSelection: function() {
      this.set('scheduledTime', undefined);
    },
  }
});
