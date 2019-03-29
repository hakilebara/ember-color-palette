// BEGIN-SNIPPET color-palette-item-controller.js
import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    const color = { name: 'blue800', base: '#0765b3' };
    this.set('color', color);
  }
});
// END-SNIPPET
