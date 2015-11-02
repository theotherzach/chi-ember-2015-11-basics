import Ember from 'ember';

var UP_ARROW = '&#9650;';
var DOWN_ARROW = '&#9660;';

export default Ember.Controller.extend({
  model: {
    "songs": [
      {
        "name": "My Love",
        "artist": "The Bird and the Bee",
        "album": "Ray Guns Are Not Just The Future",
        "time": "3:46"
      },
      {
        "name": "Neighbors",
        "artist": "The Long Division",
        "album": "Multiply",
        "time": "2:25"
      },
      {
        "name": "Middle Distance Runner",
        "artist": "Sea Wolf",
        "album": "Leaves In The River",
        "time": "3:28"
      },
      {
        "name": "Good Old Vinyl",
        "artist": "Jim Noir",
        "album": "Jim Noir",
        "time": "3:40"
      },
      {
        "name": "The Desperate Man",
        "artist": "The Black Keys",
        "album": "Rubber Factory",
        "time": "3:54"
      }
    ]
  },

  sortedSongs: Ember.computed('sortKey', 'isDescending', function () {
    var songs = this.get('model.songs');
    var sortKey = this.get('sortKey');

    if (!sortKey) {
      return songs;
    }

    if (this.get('isDescending')) {
      return songs.sortBy(sortKey).reverse();
    }

    return songs.sortBy(sortKey);
  }),

  makeArrowFor: function (header) {
    if (this.get('sortKey') !== header) { return; }

    if(this.get('isDescending')) {
      return DOWN_ARROW;
    }
    return UP_ARROW;
  },

  nameArrow: Ember.computed('sortKey', 'isDescending', function () {
    return this.makeArrowFor('name');
  }),

  artistArrow: Ember.computed('sortKey', 'isDescending' , function () {
    return this.makeArrowFor('artist');
  }),

  albumArrow: Ember.computed('sortKey', 'isDescending' , function () {
    return this.makeArrowFor('album');
  }),

  timeArrow: Ember.computed('sortKey', 'isDescending' , function () {
    return this.makeArrowFor('time');
  }),

  actions: {
    sortHeader: function(header) {
      if (header !== this.get('sortKey')) {
        this.set('sortKey', header);
        this.set('isDescending', false);
        return;
      }

      this.set('sortKey', header);
      this.set('isDescending', !this.get('isDescending'));
    }
  }
});
