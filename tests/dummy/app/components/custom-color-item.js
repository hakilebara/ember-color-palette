// BEGIN-SNIPPET custom-color-item-component.js
// custom-color-item component
import Component from '@ember/component';
import layout from '../templates/components/custom-color-item';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import invert from 'invert-color';

export default Component.extend({
  layout,
  classNames: ['custom-color-item'],
  attributeBindings: ['style'],

  style: computed('color', function() {
    return htmlSafe(
      `
       background-color: ${this.color};
       color:${invert(this.color, true)}
      `
    );
  })
});
// END-SNIPPET
