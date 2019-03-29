import Component from "@ember/component";
import { htmlSafe } from "@ember/string";
import { computed } from "@ember/object";
import layout from "../templates/components/color-palette-item";

/**
 * A color palette item component
 *
 * ```hbs
 * // this.color = { name: 'blue800', base: '#0765b3' };
 * <ColorPaletteIem @color={{this.color}}/>
 * ```
 *
 * @class ColorPaletteItem
 * @public
 */
export default Component.extend({
  layout,
  classNames: ["ember-color-palette-item"],

  /**
   * An object containing a `base` and a `name` attributes.
   * ```
   * {
   *   base: 'a color hex code',
   *   name: 'a description'
   * }
   * ```
   *
   * @argument color
   * @type Object
   */
  color: null,

  style: computed("color", function() {
    return this.get("color.base")
      ? htmlSafe(`background-color: ${this.color.base}`)
      : null;
  })
});
