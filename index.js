/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-ion-sound-es6-shim',

  blueprintsPath: function blueprintsPath() {
    return path.join(__dirname, 'blueprints');
  },

  included: function included(app) {
    this.app = app;

    this._super.included(app);

    app.import(app.bowerDirectory + '/ionsound/js/ion.sound.min.js');

    app.import(app.bowerDirectory + '/ion-sound-es6-shim/ion-sound-es6-shim.js', {
      exports: {
        'ion-sound': ['default']
      }
    });
  }
};