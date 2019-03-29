import Component from '@ember/component';
import layout from '../templates/components/color-palette';

/**
 * A color palette component
 *
 * ```hbs
 *  <ColorPalette @colors={{this.colors}} as |cp|>
 *    {{cp.item}}
 *  </ColorPalette>
 *  ```
 *
 * @class ColorPalette
 * @yield {Number} index
 * @yield {Hash} palette
 * @yield {ColorPaletteItem} palette.item
 * @yield {Object} palette.color
 * @yield {String} palette.color.base
 * @yield {String} palette.color.name
 * @public
 */
export default Component.extend({
  layout,
  classNames: ['ember-color-palette'],
  colorPaletteItemComponent: 'color-palette-item',

  /**
   * An array of `Color` objects
   *
   * @argument colors
   * @type Array
   */
  colors: null,

  /**
   * A color palette title
   *
   * @argument title
   * @type String
   */
  title: null,

  /**
   * A color palette description
   *
   * @argument description
   * @type String
   */
  description: null

});
