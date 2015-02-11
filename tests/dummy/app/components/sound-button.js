import Ember from 'ember';
import ion from 'ion-sound';

export default Ember.Component.extend({
  tagName: 'button',

  _setUpIonSound: function () {
    ion.sound({
      sounds: [
        { name: 'water_droplet' }
      ],
      volume: 0.5,
      path: 'sounds/',
      preload: true,
      multiplay: true
    });
  }.on('init'),

  click: function () {
    this._super.apply(this, arguments);

    ion.sound.play('water_droplet');
  }
});