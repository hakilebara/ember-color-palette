// BEGIN-SNIPPET color-palette-controller.js
// controller.js
import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  flashMessages: inject(),
  init() {
    this._super(...arguments);
    const colors = [
      { name: 'blue100', base: '#e8f5ff' },
      { name: 'blue400', base: '#068dfe' },
      { name: 'blue500', base: '#0890ff' },
      { name: 'blue600', base: '#077ee0' },
      { name: 'blue700', base: '#066fc4' },
      { name: 'blue800', base: '#0765b3' }
    ];
    this.set('colors', colors);
  },

  actions: {
    onCopy() {
      this.flashMessages.success("copied to clipboard");
    }
  }
});
// END-SNIPPET
