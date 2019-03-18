import Component from '@ember/component';
import layout from '../templates/components/color-palette';

export default Component.extend({
  layout,
  classNames: ['ember-color-palette'],
  colorPaletteItemComponent: 'color-palette-item'
});
