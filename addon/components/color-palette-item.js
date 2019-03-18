import Component from "@ember/component";
import { htmlSafe } from "@ember/string";
import { computed } from "@ember/object";
import layout from "../templates/components/color-palette-item";

export default Component.extend({
  layout,
  classNames: ["ember-color-palette-item"],

  style: computed("color", function() {
    return this.get("color.base")
      ? htmlSafe(`background-color: ${this.color.base}`)
      : null;
  })
});
